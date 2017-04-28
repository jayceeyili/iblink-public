import actionType from './actions/actionType.js';
// import * as actions from './actions/socketAction.js';

import io from 'socket.io-client';

let socket = null;

export function matrixMiddleware(store) {
  return next => (action) => {
    if ( socket && (
      action.type === actionType.AddNote ||
      action.type === actionType.AddBookmark ||
      action.type === actionType.DeleteNote ||
      action.type === actionType.RemoveBookmark
    )) {
      var selectedPresentationIndex = store.getState().selectedPresentationIndex;
      var presentation_id = store.getState().presentations[selectedPresentationIndex].id;
      var channel = store.getState().sockets.channel;
      socket.emit('fetchMatrix', {
          presentation_id: presentation_id,
          channel: channel
      });
    }

    return next(action);
  }
}

export function broadcastMiddleware(store) {
  return next => (action) => {
    if ( socket && action.type === actionType.SendURL) {
      var channel = store.getState().sockets.channel;
        socket.emit( 'broadcastSlide', {
          maxSlideIndex: action.url,
          channel: channel
        } );
    }

    return next(action);
  }
}

export function createRoomMiddleware( store ) {
  return next => action => {
    if ( socket && action.type === actionType.CreateRoom ) {
      socket.emit( 'room', action.channel );
    }

    return next(action);
  };
}

export function redirectMiddleware(store) {
  return next => (action) => {
    if (socket && action.type === actionType.SendStatus) {
      const status = store.getState().sockets.presenterIsOn;
      var channel = store.getState().sockets.channel;
      socket.emit( 'redirect', {
        status: status,
        channel: channel
      });
    }

    return next(action);
  };
}

export default function (store) {
  socket = io();

  socket.on('fetchMatrix', (data) => {
    // here we save the return data from server to the globle store, then the Matrix can access it
    console.log('client received matrixData: ', data.data);
    store.dispatch({
      type: actionType.ReceiveMatrixData,
      matrixData: data.data
    });
  });

  socket.on('broadcastSlide', (data) => {
    store.dispatch({
      type: actionType.ReceiveURL,
      url: data
    });
  });

  socket.on('redirect', (data) => {
    store.dispatch({
      type: actionType.ReceiveStatus,
      status: data
    });
  });
}

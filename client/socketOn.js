import actionType from './actions/actionType.js';
// import * as actions from './actions/socketAction.js';

import io from 'socket.io-client';

let socket = null;

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
      console.log('In createRoomMiddleware...');
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

import actionType from './actions/actionType.js';
// import * as actions from './actions/socketAction.js';

import io from 'socket.io-client';

var socket = null;

export function broadcastMiddleware( store ) {
  return next => action => {
    if ( socket && action.type === actionType.SendURL) {
      socket.emit( 'broadcastSlide', action.url );
    }

    return next(action);
  }
}

export function redirectMiddleware( store ) {
  return next => action => {
    if ( socket && action.type === actionType.SendStatus) {
      let status = store.getState().sockets.presenterIsOn;
      socket.emit( 'redirect', status );
    }

    return next(action);
  }
}

export default function( store ) {

  socket = io();

  socket.on( 'broadcastSlide', data => {
    store.dispatch( {
      type: actionType.ReceiveURL,
      url: data
    } );
  });

  socket.on( 'redirect', data => {
    store.dispatch( {
      type: actionType.ReceiveStatus,
      status: data
    } );
  });
}

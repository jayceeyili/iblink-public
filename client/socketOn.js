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

export default function( store ) {
  socket = io();

  socket.on( 'broadcastSlide', data => {
    store.dispatch( {
      type: actionType.ReceiveURL,
      url: data
    } );
  });
}

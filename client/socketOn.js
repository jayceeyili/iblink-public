// import actionType from './actions/actionType.js';
import * as actions from './actions/socketAction.js';

import io from 'socket.io-client';

var socket = null;

export function broadcastMiddleware( store ) {
  return next => action => {
    const result = next( action );

    if ( socket && action.type === actionType.SendURL ) {
      let currentImg = store.getState().currentIndex;
      socket.emit( 'broadcastSlide', currentImg );
    }

    return result;
  }
}

export default function( store ) {
  const socket = io();

  socket.on( 'broadcastSlide', data => {
    store.dispatch( actionType.addResponse( data ) );
  });
}

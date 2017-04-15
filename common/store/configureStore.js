import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../../client/reducers';
import SocketOn, { broadcastMiddleware, redirectMiddleware } from '../../client/socketOn.js';

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(broadcastMiddleware, redirectMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
};

export default configureStore;

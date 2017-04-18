import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import { broadcastMiddleware, redirectMiddleware } from '../socketOn.js';

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

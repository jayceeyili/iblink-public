import rootReducer from './../reducers';
import { createStore, applyMiddleware } from 'redux';
import { broadcastMiddleware, redirectMiddleware } from './../socketOn.js';

const createStoreWithMiddleware = applyMiddleware(broadcastMiddleware, redirectMiddleware)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  // Lets Redux DevTools access states and actions
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;

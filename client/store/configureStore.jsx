import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import {
  broadcastMiddleware,
  createRoomMiddleware,
  redirectMiddleware
} from '../socketOn.js';


const configureStore = (preloadedState) => {
  const store = createStore(
  	rootReducer,
  	preloadedState,
  	composeWithDevTools(applyMiddleware(
      broadcastMiddleware,
      redirectMiddleware,
      createRoomMiddleware 
    ))
);
  return store;
};

/* const configureStore = (preloadedState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
  	rootReducer,
  	preloadedState,
  	composeEnhancers(applyMiddleware(broadcastMiddleware, redirectMiddleware)));

  return store;
};*/

export default configureStore;

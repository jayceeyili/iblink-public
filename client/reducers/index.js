import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import reducers
import bookmarks from './bookmarks';
import presentations from './presentations';
import sockets from './socketReducers';

// pass reducers into combineReducers (in first object)
const rootReducer = combineReducers({
  // ES6 method for adding in key-value pairs
  sockets,
  presentations,
  bookmarks,
  routing: routerReducer
});

export default rootReducer;

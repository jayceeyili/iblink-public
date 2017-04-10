import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// Import reducers
import bookmarks from './bookmarks';

// pass reducers into combineReducers (in first object)
const rootReducer = combineReducers({
  // ES6 method for adding in key-value pairs
  bookmarks,
  routing: routerReducer
});

export default rootReducer;

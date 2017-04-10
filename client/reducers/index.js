import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// Import reducers
import bookmarks from './bookmarks';

// pass reducers into combineReducers (in first object)
const rootReducer = combineReducers({
  bookmarks,
  routing: routerReducer
});

export default rootReducer;
// Contact GitHub API Training Shop Blog About

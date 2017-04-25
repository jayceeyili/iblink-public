import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import reducers
import bookmarks from './bookmarks';
import presentations from './presentations';
import selectedPresentationIndex from './selectedPresentation';
import sockets from './socketReducers';
import currentSlide from './slideReducers';
import authentication from './authentication.js';


// pass reducers into combineReducers (in first object)
const rootReducer = combineReducers({
  // ES6 method for adding in key-value pairs
  currentSlide,
  sockets,
  presentations,
  selectedPresentationIndex,
  bookmarks,
  authentication,
  routing: routerReducer
});

export default rootReducer;

import actionType from './../actions/actionType.js';

var initialState = {
  presenterSlides: []
}

const slides = (state = {slides: []}, action) => {
  switch(action.type) {
    case actionType.GetSlides:
      return { ...state, slides: action.slides };
    default:
      return state;
  }
};

export default bookmarks;

import actionType from '../actions/actionType.js';

const initialState = {
  original: '',
  thumbnail: '',
  id: null,
  bookmark: false,
  note: '',
  tweet: false
};

const currentSlide = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionType.UpdateSlideState:
      return {
        ...state,
        original: action.currentSlide.original,
        thumbnail: action.currentSlide.thumbnail,
        id: action.currentSlide.id,
        bookmark: action.currentSlide.bookmark,
        note: action.currentSlide.note,
        tweet: action.currentSlide.tweet
      };
    default: return state;
  }
};

export default currentSlide;

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
    // case actionType.UpdateText:
    //   return { ...state, note: action.text };
    case actionType.AddNote:
      return { ...state, note: action.text };
    case actionType.UpdateNote:
      return state;
    case actionType.DeleteNote:
      return { ...state, note: '' };
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

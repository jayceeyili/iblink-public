import actionType from '../actions/actionType.js';

const initialState = {
  original: '',
  thumbnail: '',
  id: null,
  bookmark: false,
  note: '',
  notes: {},
  tweet: false
};

const currentSlide = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionType.AddNote:
      var kv = {};
      kv[action.body.currentAudienceSlide] = action.body.note;
      return { ...state, note: action.body.note, notes: Object.assign(state.notes, kv) };
    case actionType.UpdateNote:
      var kv = {};
      kv[action.body.currentAudienceSlide] = action.body.note;
      return { ...state, note: action.body.note, notes: Object.assign(state.notes, kv) };
    case actionType.DeleteNote:
      var kv = {};
      kv[action.body.currentAudienceSlide] = '';
      return { ...state, note: '', notes: Object.assign(state.notes, kv) };
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

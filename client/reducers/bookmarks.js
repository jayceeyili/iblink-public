import actionType from './../actions/actionType.js';

const bookmarks = (state = { bookmark: false, currentIndex: null }, action) => {
  switch (action.type) {
    case actionType.ToggleBookmark:
      return { ...state, bookmark: !state.bookmark };
    case actionType.GetCurrentIndex:
      return { ...state, currentIndex: action.index };
    default: return state;
  }
};

export default bookmarks;

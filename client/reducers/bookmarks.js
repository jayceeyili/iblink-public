import 'babel-polyfill';

import actionType from './../actions/actionType.js';

const bookmarks = (state = { bookmark: false, bookmarks: [], currentAudienceSlide: null }, action) => {
  switch (action.type) {
    case actionType.ToggleBookmark:
      return { ...state, bookmark: !state.bookmark };
    case actionType.AddBookmark:
      return { ...state, bookmarks: !state.bookmarks.includes(state.currentAudienceSlide) ? state.bookmarks.concat(state.currentAudienceSlide) : state.bookmarks };
    case actionType.GetCurrentAudienceSlide:
      return { ...state, currentAudienceSlide: action.currentAudienceSlide };
    default: return state;
  }
};

export default bookmarks;

import actionType from './../actions/actionType.js';

const bookmarks = (state = { bookmark: false }, action) => {
  switch (action.type) {
    case actionType.ToggleBookmark:
      return { ...state, bookmark: !state.bookmark };
    default: return state;
  }
};

export default bookmarks;

import actionType from './../actions/actionType.js';

const bookmarks = (state={}, action) => {
  switch(action.type) {
    case actionType.ToggleBookmark:
      return state;
    default: return state;
  }
};

export default bookmarks;

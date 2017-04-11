const _bookmarks = {};  // temporary, to replace with DB table

module.exports.getBookmarkState = function (slideId) {
  return !!(_bookmarks[slideId]);
};

module.exports.toggleBookmark = function (slideId) {
  if (_bookmarks[slideId] === undefined) {
    return _bookmarks[slideId] = true;
  }
  return _bookmarks[slideId] = !_bookmarks[slideId];
};


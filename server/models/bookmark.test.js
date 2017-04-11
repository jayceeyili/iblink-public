const bookmarks = {};  // temporary, to replace with DB table

module.exports.getBookmarkState = function (slideId) {
  return !!(bookmarks[slideId]);
};

module.exports.toggleBookmark = function (slideId) {
  if (bookmarks[slideId] === undefined) {
    bookmarks[slideId] = true;
  } else {
    bookmarks[slideId] = !bookmarks[slideId];
  }
};

const bookmark = require('./bookmark');


test('Server model stores and retrieves bookmarks', () => {
  const slideId = 34;
  const val = bookmark.toggleBookmark(slideId);
  expect(val === bookmark.toggleBookmark(slideId)).toBe(false);
});

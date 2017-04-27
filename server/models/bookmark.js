const Promise = require('bluebird');
const models = require('../../database/models/index');

module.exports.addBookmark = function (userId, slideId) {
  models.Bookmark.create({
    slide_id: slideId,
    user_id: userId
  })
  .catch(err => console.log(err));
};

module.exports.removeBookmark = function (userId, slideId) {
  models.Bookmark.destroy({
    where: {
      slide_id: slideId,
      user_id: userId
    }
  })
  .catch(err => console.log(err));
};

module.exports.checkIsSlideBookmarked = function (slideId, userId, callback) {
  let isSlideBookmarked = false;
  models.Bookmark.findOne({
    where: {
      slide_id: slideId,
      user_id: userId
    }
  })
  .then((bookmarkQueryResult) => {
    if (bookmarkQueryResult !== null) {
      isSlideBookmarked = true;
    }
    callback(null, isSlideBookmarked);
  })
  .catch(err => console.log(err));
};

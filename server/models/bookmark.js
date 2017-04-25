const presentationObject = require('./presentation');
const models = require('../../database/models/index');

const slides = presentationObject.getPresentation().slides;

module.exports.addBookmark = function (bookmarkedSlideUrl, userId) {
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].original === bookmarkedSlideUrl) {
      models.Bookmark.create({
        slide_id: slides[i].id,
        user_id: userId
      })
      .catch(err => console.log(err));
      break;
    }
  }
};

module.exports.removeBookmark = function (bookmarkedSlideUrl, userId) {
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].original === bookmarkedSlideUrl) {
      models.Bookmark.destroy({
        where: {
          slide_id: slides[i].id,
          user_id: userId
        }
      })
      .catch(err => console.log(err));
      break;
    }
  }
};

const presentationObject = require('./presentation');
const models = require('../../database/models/index');

module.exports.addBookmark = function (bookmarkedSlideUrl, userId) {
  const slides = presentationObject.getPresentation().slides;
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].original === bookmarkedSlideUrl) {
      models.Bookmark.create({
        slide_id: slideObject.dataValues.id,
        user_id: slides[i].id
      })
      .catch(err => console.log(err));
    }
  }
};

module.exports.removeBookmark = function (bookmarkedSlideUrl, userId) {
  models.Slide.findOne({
    attributes: ['id'],
    where: {
      image_url: bookmarkedSlideUrl
    }
  })
  .then((slideObject) => {
    models.Bookmark.destroy({
      where: {
        slide_id: slideObject.dataValues.id,
        user_id: userId
      }
    })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
};

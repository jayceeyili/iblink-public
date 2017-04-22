const presentationObject = require('./presentation');
const models = require('../../database/models/index');

module.exports.storeBookmarks = function (bookmarkList, userId) {
  const presentation = presentationObject.getPresentation();
  models.Presentation.create({
    title: presentation.title,
    user_id: userId
  })
  .then((presentationCreateResult) => {
    for (var i = 0; i < presentation.slides.length; i++) {
      models.Slide.create({
        image_url: presentation.slides[i].original,
        slide_index: i,
        presentation_id: presentationCreateResult.dataValues.id
      })
      .then((slideCreateResult) => {
        for (var j = 0; j < bookmarkList.length; j++) {
          if (slideCreateResult.dataValues.image_url === bookmarkList[j].original) {
            models.Bookmark.create({
              slide_id: slideCreateResult.dataValues.id,
              user_id: userId
            })
            .catch(err => console.log(err));
          }
        }
      })
      .catch(err => console.log(err));
    }
  })
  .catch(err => console.log(err));
};

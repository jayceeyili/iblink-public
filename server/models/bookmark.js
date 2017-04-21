const presentationObject = require('./presentation');
const models = require('../../database/models/index');
// const Presentation = require('../../database/models/presentation');
// const Bookmarks = require('../../database/models/bookmark');
// const Slides = require('../../database/models/slide');
const sequelize = require('sequelize');
// const pg = require('pg');

module.exports.storeBookmarks = function () {
  let presentation = presentationObject.getPresentation();
  // insert presentation into db
  models.Presentation.create({
    title: presentation.title,
    user_id: 46231074627482
  })
  .then(() => {
    for (var i = 0; i < presentation.slides.length; i++) {
      models.Slide.create({
        image_url: presentation.slides[i].original,
        slide_index: i,
        presentation_id: models.Presentation.findAll({
          attributes: ['id'],
          where: {
            title: presentation.title
          }
        })
        .then((id) => {
          return id;
        })
        .catch(err => console.log(err))
      });
    }
  });

  // Bookmarks.create();
};

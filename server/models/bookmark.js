const presentationObject = require('./presentation');
const models = require('../../database/models/index');
// const Presentation = require('../../database/models/presentation');
// const Bookmarks = require('../../database/models/bookmark');
// const Slides = require('../../database/models/slide');
const sequelize = require('sequelize');
// const pg = require('pg');

module.exports.storeBookmarks = function () {
  const presentation = presentationObject.getPresentation();
  models.Presentation.create({
    title: presentation.title,
    user_id: 46231074627482
  })
  .then(() => {
    models.Presentation.findAll({
      attributes: ['id'],
      where: {
        title: presentation.title
      }
    })
    .then((id) => {
      for (var i = 0; i < presentation.slides.length; i++) {
        models.Slide.create({
          image_url: presentation.slides[i].original,
          slide_index: i,
          presentation_id: id[0].dataValues.id
        });
      }
    })
    .catch(err => console.log(err));
  });
};

const presentationObject = require('./presentation');
const Presentations = require('../../database/models/presentation');
const Bookmarks = require('../../database/models/bookmark');
const Slides = require('../../database/models/slide');
const Sequelize = require('sequelize');

module.exports.storeBookmarks = function () {
  let presentation = presentationObject.getPresentation();
  // insert presentation into db
  Presentations.create({
    title: presentation.title,
    user_id: 46231074627482
  });

  for (var i = 0; i < presentation.slides.length; i++) {
    Slides.create({
      image_url: presentation.slides[i].original,
      slide_index: i,
      presentation_id: Sequelize.query(`select id from "Presentations" where title=${presentation.title}`)
    });
  }
  // Bookmarks.create();
};

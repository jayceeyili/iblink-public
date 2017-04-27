const models = require('../../database/models/index');

module.exports.getMetricsData = (presentationId, callback) => {
  models.Slide.findAll({ where: { presentation_id: presentationId }})
  .then(slides => {
    let metricsData = [];
    Promise.all(slides.map((obj, slideIndex) => new Promise((resolve, reject) => {
      let column = {
        slide: obj.dataValues.slide_index + 1
      };

      models.Note.findAndCountAll({ where: { slide_id: obj.dataValues.id }})
      .then( noteFindResult => {
        column.notes = noteFindResult.count;
        metricsData[slideIndex] = column;

        models.Bookmark.findAndCountAll({ where: { slide_id: obj.dataValues.id }})
        .then( bookmarkFindResult => {
          column.bookmarks = bookmarkFindResult.count;
          metricsData[slideIndex] = column;
        })

        resolve();
      })
      .catch( err => reject(err));


    })))
    .then( () => callback(null, metricsData))
    .catch( err => callback(err, null));
  })
  .catch( err => callback(err, null));
};

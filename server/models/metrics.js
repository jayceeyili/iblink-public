const models = require('../../database/models/index');

module.exports.getMetricsData = (presentationId, callback) => {
  models.Slide.findAll({ where: { presentation_id: presentationId }})
  .then(slides => {
    let metricsData = [];
    Promise.all(slides.map((obj, slideIndex) => new Promise((resolve, reject) => {
      let column = {
        // slide: obj.dataValues.slide_index + 1
        slide: obj.dataValues.slide_index
      };

      models.Note.findAndCountAll({ where: { slide_id: obj.dataValues.id }})
      .then( noteFindResult => {
        column.notes = noteFindResult.count;
        metricsData[slideIndex] = column;

        models.Bookmark.findAndCountAll({ where: { slide_id: obj.dataValues.id }})
        .then( bookmarkFindResult => {
          console.log('!!!!!@@@@@ bookmarkFindResult.count: ', bookmarkFindResult.count);
          // bookmark is being saved after findAndCountAll
          column.bookmarks = bookmarkFindResult.count;
          metricsData[slideIndex] = column;
          resolve();
        })
        .catch(err => reject(err));
      })
      .catch( err => reject(err));
    })))
    .then( () => {
      return callback(null, metricsData)
    })
    .catch( err => callback(err, null));
  })
  .catch( err => callback(err, null));
};

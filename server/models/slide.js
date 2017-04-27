const models = require('../../database/models/index');

module.exports.getTargetPresentationSlides = function (presentationId, callback) {
  models.Slide.findAll({
    where: {
      presentation_id: presentationId
    }
  })
  .then((targetPresentationSlides) => {
    // console.log('FROM slideUtil --> targetPresentationSlides: ', targetPresentationSlides);
    callback(null, targetPresentationSlides);
  })
  .catch(err => console.log(err));
};

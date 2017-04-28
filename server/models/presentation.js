const Promise = require('bluebird');
const models = require('../../database/models/index');
const checkIsSlideBookmarked = Promise.promisify(require('./bookmark').checkIsSlideBookmarked);

module.exports.storePresentation = function (presentation, callback) {
  // callback(null, { hello: 'world' });
  // return;
  models.Presentation.create({
    title: presentation.title,
    user_id: presentation.author
  })
  .then((presentationCreationResult) => {
    console.log('In presentation model after pres creation:', presentationCreationResult);
    presentation.id = presentationCreationResult.dataValues.id;
    Promise.all(presentation.slides.map((slide, i) => models.Slide.create({
      image_url: slide.secure_url,
      thumbnail_url: slide.thumbnail_url,
      slide_index: i,
      presentation_id: presentationCreationResult.dataValues.id
    })
      .then((slideCreationResult) => {
        console.log('In presentation model after slide creation:', slideCreationResult);
        presentation.slides[i].id = slideCreationResult.dataValues.id;
      })
    ))
    .then(() => {
      console.log('Success storing presentation!');
      callback(null, presentation);
    })
    .catch((err) => {
      console.log('Error creating presentation in storePresentation:', err);
      callback(err, null);
    });
  });
};

module.exports.getAllPresentations = function (userId, callback) {
  // models.Presentation.findAll({ where: { user_id: userId } })
  models.Presentation.findAll({ user_id: userId })
  .then((presentationsStructure) => {
    // console.log('presentations sturcture:', presentationsStructure);
    const presentations = [];
    Promise.all(presentationsStructure.map((obj, presentationIndex) => new Promise((resolve, reject) => {
      const presentation = {
        title: obj.dataValues.title,
        id: obj.dataValues.id,
        userId: obj.dataValues.user_id,
        attendeeCount: obj.dataValues.attendee_count
      };
      // console.log('will look for slides that belong to pres id:', obj.dataValues.id);

      models.Slide.findAll({ where: { presentation_id: obj.dataValues.id } })
      .then((slideObjects) => {
        // console.log('Slide objects:', slideObjects);
        const slides = slideObjects.map(slideObject => ({
          original: slideObject.dataValues.image_url,
          thumbnail: slideObject.dataValues.thumbnail_url,
          id: slideObject.dataValues.id,
          bookmark: false,
          note: '',
          tweet: false
        }));
        presentation.slides = slides;
        // console.log('>>>>>>> Cool pres:', presentation);
        presentations[presentationIndex] = presentation;
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
    })))
    .then(() => {
      callback(null, presentations);
    })
    .catch((err) => {
      callback(err, null);
    });
  })
  .catch((err) => {
    callback(err, null);
  });
};

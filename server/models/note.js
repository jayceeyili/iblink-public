const models = require('../../database/models/index');

module.exports.storeNote = ( { presentationId, currentAudienceSlide, userId, text } ) => {
  console.log( presentationId, currentAudienceSlide, userId, text );
};

module.exports.updateNote = ( { presentationId, currentAudienceSlide, userId, text } ) => {
  console.log( presentationId, currentAudienceSlide, userId, text );
};

module.exports.deleteNote = ( { presentationId, currentAudienceSlide, userId, text } ) => {
  console.log( presentationId, currentAudienceSlide, userId, text );
};

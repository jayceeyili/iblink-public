const models = require('../../database/models/index');

module.exports.storeNote = ( { presentationId, userId, note, slideId } ) => {
  console.log( presentationId, userId, note, slideId );
  models.Note.create( {
    slide_id: slideId,
    user_id: userId,
    text: note
  } )
  .then( () => console.log( 'save note to database successfully!' ) )
  .catch( err => console.error( 'Error in storeNote: ', err ) );
};

module.exports.updateNote = ( { presentationId, currentAudienceSlide, userId, text } ) => {
  console.log( presentationId, currentAudienceSlide, userId, text );
};

module.exports.deleteNote = ( { presentationId, currentAudienceSlide, userId, text } ) => {
  console.log( presentationId, currentAudienceSlide, userId, text );
};

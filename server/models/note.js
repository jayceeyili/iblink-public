const models = require('../../database/models/index');

module.exports.storeNote = ( { userId, note, slideId } ) => {
  models.Note.create( {
    slide_id: slideId,
    user_id: userId,
    text: note
  } )
  .then( () => console.log( 'save note to database successfully!' ) )
  .catch( err => console.error( 'Error in storeNote: ', err ) );
};

module.exports.updateNote = ( { userId, note, slideId } ) => {
  models.Note.update(
    { text: note },
    { where: {
      slide_id: slideId,
      user_id: userId
    } }
  )
  .then( () => console.log( 'update note in database successfully!' ) )
  .catch( err => console.error( 'Error in updateNote: ', err ) );
};

module.exports.deleteNote = ( { userId, slideId } ) => {
  models.Note.destroy( {
    where: {
      slide_id: slideId,
      user_id: userId
    }
  } )
  .then( () => console.log( 'delete note from database successfully!' ) )
  .catch( err => console.error( 'Error in deleteNote: ', err ) );
};

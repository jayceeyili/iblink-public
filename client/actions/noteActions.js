import ActionType from './actionType';

export function addNote( body ) {
  fetch('/audience_presentation/add_note', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( body )
  })
  .then( res => {
    if ( !res.ok ) {
      throw new Error( 'Failed to Add Note!' );
    }
    return res.json()
  } )
  .then( ( data ) => console.log( 'message from addNote action: ', data ) )
  .catch( error => console.error( 'error from addNote action: ', error) );

  return {
    type: ActionType.AddNote
  }
}

export function updateNote( body ) {
  // fetch('/audience_presentation/update_note', {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify( body )
  // })
  // .then( res => {
  //   if ( !res.ok ) {
  //     throw new Error( 'Failed to Add Note!' );
  //   }
  //   return res.json()
  // } )
  // .then( ( data ) => console.log( data ) )
  // .catch( error => console.error( error) );

  return {
    type: ActionType.UpdateNote,
    text: body.text
  }
}

export function deleteNote( body ) {
  // fetch('/audience_presentation/delete_note', {
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify( body )
  // })
  // .then( res => {
  //   if ( !res.ok ) {
  //     throw new Error( 'Failed to Add Note!' );
  //   }
  //   return res.json()
  // } )
  // .then( ( data ) => console.log( data ) )
  // .catch( error => console.error( error) );

  return {
    type: ActionType.DeleteNote,
    text: body.text
  }
}

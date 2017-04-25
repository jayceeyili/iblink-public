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
  fetch('/audience_presentation/update_note', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( body )
  })
  .then( res => {
    if ( !res.ok ) {
      throw new Error( 'Failed to Update Note!' );
    }
    return res.json()
  } )
  .then( ( data ) => console.log( 'message from updateNote action: ', data ) )
  .catch( error => console.error( 'error from updateNote action: ', error) );

  return {
    type: ActionType.UpdateNote,
    text: body.text
  }
}

export function deleteNote( body ) {
  fetch('/audience_presentation/delete_note', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( body )
  })
  .then( res => {
    if ( !res.ok ) {
      throw new Error( 'Failed to Delete Note!' );
    }
    return res.json()
  } )
  .then( ( data ) => console.log( 'message from deleteNote action: ', data ) )
  .catch( error => console.error( 'error from deleteNote action: ', error) );

  return {
    type: ActionType.DeleteNote,
    text: body.text
  }
}

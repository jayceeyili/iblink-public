import ActionType from './actionType';

export function updateText( text ) {
  return {
    type: ActionType.UpdateText,
    text
  };
}

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
      throw new Error( 'Faild to Add Note!' );
    }
    return res.json()
  } )
  .then( ( data ) => { console.log('Successfully Added Note for current slide') } )
  .catch( error => { console.error( error) } );

  return {
    type: ActionType.AddNote
  }
}

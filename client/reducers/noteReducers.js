import actionType from '../actions/actionType.js';

const initialState = {
  text: '',
}

const notes = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionType.UpdateText:
      return { ...state, text: action.text };
    case actionType.AddNote:
      return state;
    default:
      return state;
  }
};

export default notes;

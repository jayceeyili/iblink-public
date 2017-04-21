import actionType from '../actions/actionType.js';

const initialState = {
  text: '',
}

const notes = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionType.UpdateText:
      return { ...state, updateText: action.text };
    default:
      return state;
  }
};

export default notes;

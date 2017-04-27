import ActionType from '../actions/actionType';

const presentation = (state, action) => {
  // console.log('In reduce presentation with state:', state, 'and action:', action );
  switch (action.type) {
    case ActionType.RemovePresentation:
      if (state.id !== action.id) {
        return state
      }
      return {
        null
      }
    default:
      return state
  }
}

const presentations = (state = [], action) => {
  // console.log('In reduce presentationS with state:', state, 'and action:', action );
  switch (action.type) {
    case ActionType.RemovePresentation:
      return state.map(pres =>
        presentation(pres, action)
      );
    case ActionType.UploadPresentation:
      return state;
    default:
      return state
  }
}

export default presentations

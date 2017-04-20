import ActionType from '../actions/actionType';

const selectedPresentationIndex = (state = 0, action) => {
  // console.log('In reduce selectedPresentationIndex with state:', state, 'and action:', action);
  switch (action.type) {
    case ActionType.SetSelectedPresentationIndex:
      return { ...state,
        selectedPresentationIndex: action.selectedPresentationIndex };
    default:
      return state;
  }
};

export default selectedPresentationIndex;

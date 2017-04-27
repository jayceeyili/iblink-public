'use strict';

import ActionType from '../actions/actionType';

const selectedPresentationIndex = (state = 0, action) => {
  // console.log('In reduce selectedPresentationIndex with state:', state, 'and action:', action);
  switch (action.type) {
    case ActionType.SelectPresentationIndex:
      // console.log('%%%%% in selected presentation reducer with state', state, ' and new pres:', action);
      return action.selectedPresentationIndex ;
    default:
      return state;
  }
};

export default selectedPresentationIndex;

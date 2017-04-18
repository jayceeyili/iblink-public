import ActionType from './actionType';

export const selectPresentationIndex = selectedPresentationIndex => ({
  type: ActionType.SelectPresentationIndex,
  selectedPresentationIndex
});


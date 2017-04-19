// Presentations actions that are not related to a live presentation

import ActionType from './actionType';

export const removePresentationIndex = selectedPresentationIndex => ({
  type: ActionType.RemovePresentation,
  selectedPresentationIndex
});

export const selectPresentationIndex = selectedPresentationIndex => ({
  type: ActionType.SelectPresentationIndex,
  selectedPresentationIndex
});


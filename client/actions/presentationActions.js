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

export function uploadPresentation(newPresentation) {
  console.log('pres Action: uploading pres:', newPresentation);
  fetch('/presenter_presentation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      newPresentation
    })
  })
  .then((res) => {
    console.log('Presentation uploaded', res);
  })
  .catch((error) => {
    console.error('@@@@@ Error in uploadPresentation:', error);
  });
  return {
    type: ActionType.AddPresentation,
    newPresentation
  };
}

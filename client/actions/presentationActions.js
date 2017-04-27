// Presentations actions that are not related to a live presentation

import ActionType from './actionType';

export const removePresentationIndex = selectedPresentationIndex => ({
  type: ActionType.RemovePresentation,
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
  .then(res => res.json())
  .then((json) => {
    console.log('Hopefully resolved promise:', json);
    // update the presentation and slide ID fields of the state
// TODO: update local state
// presentation.push(newPresentation.map((slide, index) => {
//  slide.id = res...
// }));
    // select that presentation
    // TODO: RETURN the data!
    // return {
    //   type: ActionType.AddPresentation,
    //   presentations
    // };
  })
  .catch((error) => {
    console.error('@@@@@ Error in uploadPresentation:', error);
  });

  return {
    type: ActionType.UploadPresentation
  }
}

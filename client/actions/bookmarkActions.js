import ActionType from './actionType';

export function toggleBookmark() {
  return {
    type: ActionType.ToggleBookmark
  };
}

export function addBookmark(slideIndex) {
  fetch('/audience_presentation/add_bookmark', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      slideIndex: slideIndex
    })
  })
  .then(() => {
    console.log('Slide ', slideIndex, ' is successfully bookmarked.');
  })
  .catch((error) => {
    console.error(error);
  });
  return {
    type: ActionType.AddBookmark,
    slideIndex
  };
}

export function removeBookmark() {

}

export function getCurrentAudienceSlide(currentAudienceSlide) {
  return {
    type: ActionType.GetCurrentAudienceSlide,
    currentAudienceSlide
  };
}

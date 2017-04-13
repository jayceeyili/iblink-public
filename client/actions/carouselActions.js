import ActionType from './actionType';

export function getSlides(slides) {
  console.log(slides);
  return {
    type: ActionType.GetSlides,
    slides
  };
}

import ActionType from './actionType';

export function updateSlideState( currentSlide ) {
  return {
    type: ActionType.UpdateSlideState,
    currentSlide
  }
};

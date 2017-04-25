import ActionType from './actionType';

export function updateText( text ) {
  return {
    type: ActionType.UpdateText,
    text
  };
}

export function updateSlideState( currentSlide ) {
  return {
    type: ActionType.UpdateSlideState,
    currentSlide
  }
};

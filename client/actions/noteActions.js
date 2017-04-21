import ActionType from './actionType';

export function updateText( text ) {
  return {
    type: ActionType.UpdateText,
    text
  };
}

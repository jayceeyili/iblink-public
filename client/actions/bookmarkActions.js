import ActionType from './actionType';

export function toggleBookmark() {
  return {
    type: ActionType.ToggleBookmark
  };
}

export function addBookmark() {
  return {
    type: ActionType.AddBookmark
  };
}

export function removeBookmark() {

}

import ActionType from './actionType';

export function toggleBookmark() {
  console.log('hi');
  return {
    type: ActionType.ToggleBookmark
  };
}

export function addBookmark() {
  console.log('ho');
  return {
    type: ActionType.AddBookmark
  };
}

export function removeBookmark() {

}

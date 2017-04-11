import ActionType from './actionType';

export function toggleBookmark(user) {
  console.log('hi');
  return {
    type: ActionType.ToggleBookmark,
    user
  };
}

export function addBookmark(user) {
  console.log('ho');
  return {
    type: ActionType.AddBookmark,
    user
  };
}

export function removeBookmark() {

}

import ActionType from './actionType';

export function loggedIn(userId) {
  return ({
    type: ActionType.GetUserID,
    userId
  })
}

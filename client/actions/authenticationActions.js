import ActionType from './actionType';

export function loggedIn(userId) {
  return ({
    type: ActionType.GetUserID,
    userId
  })
}

export function getUserData(userId) {
  fetch('/' + userId, {
    method: 'GET'})
  .then(function(response) {
	  return response;
  })
  .catch(function(err) {
    console.log('you have an error', err)
  });
}

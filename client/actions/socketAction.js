import ActionType from './actionType';

export function sendUrl( url ) {
  console.log('Socket Action: sendUrl', url);
  return {
    type: ActionType.SendURL,
    url
  };
}

export function receiveURL( url ) {
  console.log('Socket Action: receiveURL', url);
  return {
    type: ActionType.ReceiveURL,
    url
  };
}

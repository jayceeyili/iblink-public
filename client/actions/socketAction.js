import ActionType from './actionType';

export function sendURL( url ) {
  // console.log('Socket Action: sendUrl', url);
  return {
    type: ActionType.SendURL,
    url
  };
}

export function updateURL( url ) {
  return {
    type: ActionType.UpdateURL,
    url
  };
}

export function receiveURL( url ) {
  // console.log('Socket Action: receiveURL', url);
  return {
    type: ActionType.ReceiveURL,
    url
  };
}

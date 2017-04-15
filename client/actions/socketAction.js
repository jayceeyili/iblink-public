import ActionType from './actionType';

export function SendStatus() {
  return {
    type: ActionType.SendStatus
  }
}

export function ReceiveStatus() {
  return {
    type: ActionType.ReceiveStatus
  }
}

export function sendURL( url ) {
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

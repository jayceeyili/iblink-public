import actionType from './../actions/actionType.js';

const sockets = ( state = { sentUrl: '', receivedUrlId: '', presenterIsOn: true, audienceIsOn: true }, action ) => {
  switch (action.type) {
    case actionType.SendStatus:
      return { ...state, presenterIsOn: !state.presenterIsOn };
    case actionType.ReceiveStatus:
      return { ...state, audienceIsOn: !action.status };
    case actionType.ReceiveURL:
      return { ...state, receivedUrlId: action.url };
    case actionType.UpdateURL:
      return { ...state, sentUrl: action.url };
    case actionType.SendURL:
      return state;
    default: return state;
  }
};

export default sockets;

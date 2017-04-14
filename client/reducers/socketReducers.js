import actionType from './../actions/actionType.js';

const sockets = ( state = { sentUrl: '', receivedUrlId: '', isOn: false }, action ) => {
  switch (action.type) {
    case actionType.TogglePresent:
      return { ...state, isOn: !state.isOn };
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

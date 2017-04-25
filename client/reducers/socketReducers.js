import actionType from '../actions/actionType.js';

const initialState = {
  sentUrl: '',
  receivedUrlId: '',
  presenterIsOn: true,
  audienceIsOn: true,
  channel: null
};

const sockets = (state = initialState, action) => {

  switch (action.type) {
    case actionType.CreateRoom:
      return { ...state, channel: action.channel };
    case actionType.SendStatus:
      return { ...state, presenterIsOn: !state.presenterIsOn };
    case actionType.ReceiveStatus:
      return { ...state, audienceIsOn: action.status };
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

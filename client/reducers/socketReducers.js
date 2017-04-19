import actionType from '../actions/actionType.js';

const initialState = {
  sentUrl: '',
  receivedUrlId: '',
  presenterIsOn: true,
  audienceIsOn: true
};

const sockets = (state = initialState, action) => {
  // console.log('In reduce sockets with state:', state, 'and action:', action);

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
      // console.log('Socket reducer: send URL');
      return state;
    default: return state;
  }
};

export default sockets;

import actionType from './../actions/actionType.js';

const sockets = ( state = { sentUrl: '', receivedUrl: '' }, action ) => {
  switch (action.type) {
    case actionType.ReceiveURL:
      // console.log('ReceiveURL reducer !!!!!!', action.url);
      return { ...state, receivedUrl: action.url };
    case actionType.UpdateURL:
      return { ...state, sentUrl: action.url };
    case actionType.SendURL:
      // console.log('SendURL reducer !!!!!!', state.url );
      return state;
    default: return state;
  }
};

export default sockets;

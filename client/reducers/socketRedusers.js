import actionType from './../actions/actionType.js';

const sockets = ( state = {}, action ) => {
  switch (action.type) {
    case actionType.ReceiveURL:
      // return { ...state, audienceSlides: [ ...audienceSlides, action.url ] };
      console.log('ReceiveURL reducer !!!!!!', action.url);
      return state;
    case actionType.SendURL:
      console.log('SendURL reducer !!!!!!', action.url);
      return state;
    default: return state;
  }
};

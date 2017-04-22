import actionType from '../actions/actionType';

const userState = (state = {userId: ''}, action) => {
  switch (action.type) {
    case actionType.GetUserID:
      return { ...state, userId: action.userId};
    default:
      return state;
  }
};

export default userState

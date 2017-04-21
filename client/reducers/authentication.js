import actionType from '../actions/actionType';

const defaultState = {
  userId: ''
}

const userState = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GetUserID:
      return { ...defaultState, userId: action.userId};
    default:
      return state;
  }
};

export default userState

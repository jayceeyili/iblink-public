import actionType from '../actions/actionType.js';

const initialState = [];

const matrix = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ReceiveMatrixData:
      return action.matrixData;
    default: return state;
  }
};

export default matrix;

import actionType from '../actions/actionType.js';

const matrix = (state = [], action) => {
  switch (action.type) {
    case actionType.ReceiveMatrixData:
      return action.matrixData;
    default: return state;
  }
};

export default matrix;

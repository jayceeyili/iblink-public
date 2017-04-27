import actionType from '../actions/actionType.js';

const initialState = {
  matrixData: ''
};

const matrix = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ReceiveMatrixData:
      return { ...state, matrixData: action.matrixData };
    default: return state;
  }
};

export default matrix;

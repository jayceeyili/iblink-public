import actionType from '../actions/actionType.js';

const initialState = [
  {
    notes: 0,
    // bookmarks: 0,
    slide: 0
  }
];

const matrix = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ReceiveMatrixData:
      return action.matrixData;
    default: return state;
  }
};

export default matrix;

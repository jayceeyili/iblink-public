import ActionType from './actionType';

export function receiveMatrixData( matrixData ) {
  return {
    type: ActionType.ReceiveMatrixData,
    matrixData
  };
}

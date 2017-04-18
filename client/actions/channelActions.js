import ActionType from './actionType';

export const setChannel = channel => ({
  type: ActionType.SetChannel,
  channel
});

export const deleteChannel = channel => ({
  type: ActionType.DeleteChannel,
  channel
});

import ActionType from './actionType';

export const setChannel = channel => ({
  type: ActionType.SetChannel,
  channel
});

export const deleteChannel = channel => ({
  type: ActionType.DeleteChannel,
  channel
});

export const setMaxSlideIndex = maxSlideIndex => ({
  type: ActionType.SetMaxSlideIndex,
  maxSlideIndex
});

export const setCurrentSlideIndex = currentSlideIndex => ({
  type: ActionType.SetCurrentSlideIndex,
  currentSlideIndex
});

import ActionType from './actionType';

let nextPresentationId = 0;

export const addPresentation = (title, slides) => ({
  type: ActionType.AddPresentation,
  id: nextPresentationId++,
  title,
  slides
});

export const removePresentation = id => ({
  type: ActionType.RemovePresentation,
  id
});

export const selectPresentation = selectedPresentationIndex => ({
  type: ActionType.SelectPresentation,
  selectedPresentationIndex
});

export const setMaxSlide = maxSlide => ({
  type: ActionType.SetMaxSlide,
  maxSlide
});

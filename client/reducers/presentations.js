import ActionType from '../actions/actionType';

const presentation = (state, action) => {
  console.log('In reduce presentation with state:', state, 'and action:', action );
  switch (action.type) {
    case ActionType.AddPresentation:
      return {
        id: action.id,
        title: action.title,
        slides: action.slides
      }
    case ActionType.RemovePresentation:
      if (state.id !== action.id) {
        return state
      }
      return {
        null
      }
    case ActionType.SelectPresentation:
      return action.selectedPresentation
    case ActionType.SelectSlide
      return action.selectedSlide
    default:
      return state
  }
}

const presentations = (state = [], action) => {
  console.log('In reduce presentationS with state:', state, 'and action:', action );
  switch (action.type) {
    case ActionType.AddPresentation:
      return {
        ...state, 
        presentations: [...presentations, presentation(undefined, action)]
      }
    case ActionType.RemovePresentation:
      return state.map(pres =>
        presentation(pres, action)
      )
    case ActionType.SelectPresentation:
      return {...state,
        selectedPresentation: action.selectedPresentation}
    case ActionType.SelectSlide:
      return {...state,
        selectedSlide: action.selectedSlide}
    default:
      return state
  }
}

export default presentations
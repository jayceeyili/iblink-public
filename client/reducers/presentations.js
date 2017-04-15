import ActionType from '../actions/actionType';

const presentation = (state, action) => {
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
    default:
      return state
  }
}

const presentations = (state = [], action) => {
  switch (action.type) {
    case ActionType.AddPresentation:
      return [
        ...state,
        presentation(undefined, action)
      ]
    case ActionType.RemovePresentation:
      return state.map(pres =>
        presentation(pres, action)
      )
    default:
      return state
  }
}

export default presentations
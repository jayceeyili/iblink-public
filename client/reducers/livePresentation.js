import ActionType from '../actions/actionType';

const livePresentation = (state = null, action) => {
  console.log('In reduce livePresentation with state:', state, 'and action:', action );
  switch (action.type) {
    case ActionType.SetChannel:
      return {...state,
        channel: action.channel
      }
    case ActionType.DeleteChannel:
      return {
        null
      }
    case ActionType.SetMaxSlideIndex:
      return {...state,
        maxSlideIndex: action.maxSlideIndex
      }
    default:
      return state
  }
}

export default livePresentation

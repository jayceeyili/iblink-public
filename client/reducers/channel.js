import ActionType from '../actions/actionType';

const channel = (state = null, action) => {
  console.log('In reduce channel with state:', state, 'and action:', action );
  switch (action.type) {
    case ActionType.SetChannel:
      return {...state,
        channel: action.channel
      }
    case ActionType.DeleteChannel:
      return {
        null
      }
    default:
      return state
  }
}

export default channel
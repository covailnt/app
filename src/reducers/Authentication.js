import { LOG_IN_WITH_PROVIDER, SET_CURRENT_USER } from 'actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case LOG_IN_WITH_PROVIDER:
      return action.payload
    case SET_CURRENT_USER:
      return action.payload
    default:
      return state
  }
}

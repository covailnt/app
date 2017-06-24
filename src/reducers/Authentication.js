import { LOG_IN_WITH_PROVIDER } from 'actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case LOG_IN_WITH_PROVIDER:
      return action.payload
    default:
      return state
  }
}

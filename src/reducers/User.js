import { SET_CURRENT_USER } from 'actions/types'

export default function(state = false, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return action.payload
  }

  return state
}

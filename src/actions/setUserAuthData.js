import { SET_CURRENT_USER } from 'actions/types'

const setCurrentUser = (user) => (
  { type: SET_CURRENT_USER, user }
)

export default setCurrentUser

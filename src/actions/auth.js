import { CHANGE_AUTH, CREATE_USER_WITH_EMAIL } from './types'

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}

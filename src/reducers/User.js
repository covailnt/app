import firebase from 'refire/firebase'
import { throttle } from 'underscore'
import {
  LOG_IN_WITH_PROVIDER,
  SET_CURRENT_USER,
  SET_PROFILE_BANNER,
  SET_PROFILE_SPECIALTY,
} from 'actions/types'

const userReducer = (state = null, action) => {
  let path
  let ref
  let user

  switch (action.type) {
    case LOG_IN_WITH_PROVIDER:
      return action.payload

    case SET_CURRENT_USER:
      return action.user

    case SET_PROFILE_BANNER:
      return Object.assign({}, state, { bannerURL: action.bannerURL })

    case SET_PROFILE_SPECIALTY:
      path = `users/${state.user.uid}`
      ref = firebase.database().ref(path)

      throttle(ref.update({ specialty: action.specialty }), 300)

      user = Object.assign({}, state.user, { specialty: action.specialty })

      return Object.assign({}, state, user)

    default:
      return state
  }
}

export default userReducer

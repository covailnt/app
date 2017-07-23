import firebase from 'refire/firebase'
import { throttle } from 'underscore'
import {
  LOG_IN_WITH_PROVIDER,
  SET_CURRENT_USER,
  SET_PROFILE_BANNER,
  SET_PROFILE_SPECIALTY,
  USER_FETCH_SUCCEEDED,
} from 'actions/types'

const userReducer = (state = null, action) => {
  let path
  let ref

  switch (action.type) {
    case LOG_IN_WITH_PROVIDER:
      return action.payload

    case SET_CURRENT_USER:
      return action.user

    case SET_PROFILE_BANNER:
      return Object.assign({}, state, { bannerURL: action.bannerURL })

    case SET_PROFILE_SPECIALTY:
      path = `users/${state.uid}`
      ref = firebase.database().ref(path)

      throttle(ref.update({ specialty: action.specialty }), 300)

      return Object.assign({}, state, { specialty: action.specialty })

    case USER_FETCH_SUCCEEDED:
      console.log('Merged user auth and user data into store ===>', action.user)
      return Object.assign({}, state, action.user)

    default:
      return state
  }
}

export default userReducer

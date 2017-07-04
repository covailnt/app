import {
  LOG_IN_WITH_PROVIDER,
  SET_CURRENT_USER,
  SET_PROFILE_BANNER,
  SET_PROFILE_SPECIALTY,
} from 'actions/types'

const defaultState = {
  bannerURL: '',
  displayName: '',
  email: '',
  photoURL: '',
  specialty: '',
  uid: '',
}

export default function (state = null, action) {
  switch (action.type) {
    case LOG_IN_WITH_PROVIDER:
      return action.payload

    case SET_CURRENT_USER:
      return action.payload

    case SET_PROFILE_BANNER:
      return Object.assign({}, state, { bannerURL: action.bannerURL })

    case SET_PROFILE_SPECIALTY:
      return Object.assign({}, state, { specialty: action.specialty })

    default:
      return state
  }
}

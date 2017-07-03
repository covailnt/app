import { SET_PROFILE_BANNER } from 'actions/types'

export default function (state = { bannerURL: null }, action) {
  switch (action.type) {
    case SET_PROFILE_BANNER:
      return action.bannerURL

    default:
      return state
  }
}

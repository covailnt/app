import { SET_PROFILE_BANNER } from './types'

export const setProfileBanner = (bannerURL) => {
  return {
    type: SET_PROFILE_BANNER,
    bannerURL
  }
}

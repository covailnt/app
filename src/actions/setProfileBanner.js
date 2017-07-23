import { SET_PROFILE_BANNER } from 'actions/types'

const setProfileBanner = (bannerURL) => (
  { type: SET_PROFILE_BANNER, bannerURL }
)

export default setProfileBanner

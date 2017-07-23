import { SET_PROFILE_SPECIALTY } from 'actions/types'

const setProfileSpecialty = (specialty) => (
  { type: SET_PROFILE_SPECIALTY, specialty }
)

export default setProfileSpecialty

import { SET_PROFILE_SPECIALTY } from './types'

export const setProfileSpecialty = (specialty) => {
  return {
    type: SET_PROFILE_SPECIALTY,
    specialty,
  }
}

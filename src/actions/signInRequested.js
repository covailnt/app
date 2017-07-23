import { SIGN_IN_REQUESTED } from './types'

const signInRequested = signIn => (
  { type: SIGN_IN_REQUESTED, signIn }
)

export default signInRequested

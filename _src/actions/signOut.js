import { SIGN_OUT } from 'actions/types'

const signOut = isSignedOut => ({ type: SIGN_OUT, isSignedOut })

export default signOut

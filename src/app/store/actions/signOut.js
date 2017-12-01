import { SIGN_OUT } from '~/store/actions/types'

const signOut = isSignedOut => ({ type: SIGN_OUT, isSignedOut })

export default signOut

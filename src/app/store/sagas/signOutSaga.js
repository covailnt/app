import { put, takeLatest } from 'redux-saga/effects'

import { SIGN_OUT_REQUESTED } from '~/store/actions/types'
import firebase from '~/.config'
import regeneratorRuntime from 'regenerator-runtime' // eslint-disable-line
import { signOut } from '~/store/actions'

function* signUserOut() {
  try {
    const isSignedOut = yield firebase
      .auth()
      .signOut()
      .then(() => null)

    yield put(signOut(isSignedOut))
  } catch (e) {
    console.log(
      'There was an error in the signUserOut generator function',
      e.message,
    )
    yield put(signOut('err'))
  }
}

export default function* signOutSaga() {
  yield takeLatest(SIGN_OUT_REQUESTED, signUserOut)
}

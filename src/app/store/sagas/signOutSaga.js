import 'isomorphic-unfetch'
import 'regenerator-runtime'

import firebase from '~/.config'
import { signOut } from '~/store/actions'
import { SIGN_OUT_REQUESTED } from '~/store/actions/types'
import { put, takeLatest } from 'redux-saga/effects'

function removeUserServerSession() {
  fetch('/api/logout', {
    method: 'POST',
    credentials: 'same-origin',
  })
}

function* signUserOut() {
  try {
    removeUserServerSession()

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
import firebase from 'refire/firebase'
// import { sagaFirebase } from 'refire/firebase'
import { call, put, takeLatest } from 'redux-saga/effects'
import { LOG_IN_WITH_PROVIDER, LOG_IN_WITH_PROVIDER_SUCCESS,  LOG_IN_WITH_PROVIDER_FAIL } from 'actions/types'
import 'regenerator-runtime/runtime'

const getProvider = provider => {
  switch(provider) {
    case 'facebook':
      return new firebase.auth.FacebookAuthProvider()
    case 'github':
      return new firebase.auth.GithubAuthProvider()
    case 'google':
      return new firebase.auth.GoogleAuthProvider()
  }
}

function* logIn(action) {
  try {
    console.log('in saga ', action)

    const provider = getProvider(action.payload)
    console.log('provider', provider)

    const user = yield call(firebase.auth.signInWithPopup(provider))
    console.log('got user ', user)

    yield put({ type: LOG_IN_WITH_PROVIDER_SUCCESS, user })
    console.log('sending out user')

  } catch (e) {
    console.log('error in saga', e)
    yield put({ type: LOG_IN_WITH_PROVIDER_FAIL, message: e.message })
  }
}

function* logInSaga() {
  yield takeLatest(LOG_IN_WITH_PROVIDER, logIn)
}

export default logInSaga

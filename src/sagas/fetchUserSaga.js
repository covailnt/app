import 'babel-polyfill'
import { call, put, takeLatest } from 'redux-saga/effects'
import firebase from 'refire/firebase'
import { USER_FETCH_REQUESTED } from 'actions/types'
import { isPreloadingStore, userFetchFailed, userFetchSucceeded } from 'actions'
import { omit } from 'underscore'

function* getVals(userAuthInfo) {
  const properties = ['yo', 'bannerURL', 'specialty']
  const ref = firebase.database().ref(`users/${userAuthInfo.uid}`)

  const userData = yield ref.once('value').then((snapshot) => {
    if (snapshot.val()) {
      const vals = {}

      properties.forEach((property) => {
        if (snapshot.val()[property]) {
          vals[property] = snapshot.val()[property]
        }
      })

      return vals
    }

    ref.set(omit(userAuthInfo, 'uid'))
    return {}
  })

  return userData
}

function* fetchUserData(action) {
  try {
    const userAuthInfo = {
      displayName: action.user.displayName,
      email: action.user.email,
      photoURL: action.user.photoURL,
      uid: action.user.uid,
    }
    const userData = yield call(getVals, userAuthInfo)
    const user = Object.assign({}, userAuthInfo, userData)

    yield put(userFetchSucceeded(user))
    yield put(isPreloadingStore(false))

  } catch (e) {
    yield put(userFetchFailed(e.message))
  }
}

export default function* fetchUserSaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUserData)
}

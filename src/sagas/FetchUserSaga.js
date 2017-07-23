import 'babel-polyfill'
import { call, put, takeLatest } from 'redux-saga/effects'
import firebase from 'refire/firebase'
import { USER_FETCH_REQUESTED } from 'actions/types'
import { isPreloadingStore, userFetchFailed, userFetchSucceeded } from 'actions'

function* getVals(uid) {
  const properties = ['yo', 'bannerURL', 'specialty']

  const userValues = yield firebase.database().ref(`users/${uid}`).once('value').then((snapshot) => {
    const vals = {}

    properties.forEach((property) => {
      if (snapshot.val()[property]) {
        vals[property] = snapshot.val()[property]
      }
    })

    return vals
  })

  return userValues
}

function* fetchUserData(action) {
  try {
    const userAuthInfo = {
      displayName: action.user.displayName,
      email: action.user.email,
      photoURL: action.user.photoURL,
      uid: action.user.uid,
    }
    const userData = yield call(getVals, action.user.uid)
    const user = Object.assign({}, userAuthInfo, userData)

    yield put(userFetchSucceeded(user))
    yield put(isPreloadingStore(false))

  } catch (e) {
    yield put(userFetchFailed(e.message))
  }
}

function* mySaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUserData)
}

export default mySaga

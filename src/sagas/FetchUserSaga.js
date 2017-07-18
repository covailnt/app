import 'babel-polyfill'
import { call, put, takeLatest } from 'redux-saga/effects'
import firebase from 'refire/firebase'
import {
  IS_FETCHING_USER,
  USER_FETCH_FAILED,
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
} from 'actions/types'

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
    const userData = yield call(getVals, action.payload.uid)

    yield put({ type: USER_FETCH_SUCCEEDED, userData })
    yield put({ type: IS_FETCHING_USER, payload: false })

  } catch (e) {
    yield put({ type: USER_FETCH_FAILED, message: e.message })
  }
}

function* mySaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUserData)
}

export default mySaga

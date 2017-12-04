import firebase from '~/.config'
import {
  isPreloadingStore,
  userFetchFailed,
  userFetchSucceeded,
} from '~/store/actions'
import { USER_FETCH_REQUESTED } from '~/store/actions/types'
import l from '~/utils'
import { call, put, takeLatest } from 'redux-saga/effects'
import regeneratorRuntime from 'regenerator-runtime' // eslint-disable-line

function* fetchUserData(action) {
  try {
    const userAuthInfo = {
      displayName: action.user.displayName,
      email: action.user.email,
      photoURL: action.user.photoURL,
      uid: action.user.uid,
    }
    l('calling getVals')
    const userData = yield call(getVals, userAuthInfo)
    const user = Object.assign({}, userAuthInfo, userData)

    yield put(userFetchSucceeded(user))
    yield put(isPreloadingStore(false))
  } catch (err) {
    l('user fetch failed', err)
    yield put(userFetchFailed(err.message))
  }
}

export default function* fetchUserSaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUserData)
}

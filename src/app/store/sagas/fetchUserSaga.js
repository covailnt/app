import firebase from '~/.config'
import { userFetchFailed, userFetchSucceeded } from '~/store/actions'
import { USER_FETCH_REQUESTED } from '~/store/actions/types'
import l from '~/utils'
import { getUserData } from '~/utils'
import { call, put, takeLatest } from 'redux-saga/effects'
import regeneratorRuntime from 'regenerator-runtime' // eslint-disable-line

function* fetchUserData(action) {
  try {
    const userAuthInfo = {
      userName: action.user.userName,
      email: action.user.email,
      picture: action.user.picture,
      uid: action.user.uid,
    }
    l('calling getVals')
    const userData = yield getUserData(firebase, userAuthInfo)
    const user = Object.assign({}, userAuthInfo, userData)

    yield put(userFetchSucceeded(user))
  } catch (err) {
    l('user fetch failed', err)
    yield put(userFetchFailed(err.message))
  }
}

export default function* fetchUserSaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUserData)
}

import regeneratorRuntime from 'regenerator-runtime' // eslint-disable-line
import { all, call } from 'redux-saga/effects'
import fetchUserSaga from './fetchUserSaga'
import setInputSaga from './setInputSaga'
import signInSaga from './signInSaga'
import signOutSaga from './signOutSaga'

export default function* rootSaga() {
  yield all([
    call(fetchUserSaga),
    call(setInputSaga),
    call(signInSaga),
    call(signOutSaga),
  ])
}

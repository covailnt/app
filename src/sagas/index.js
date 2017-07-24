import 'babel-polyfill'
import { fork } from 'redux-saga/effects'
import fetchUserSaga from './fetchUserSaga'
import setInputSaga from './setInputSaga'
import signInSaga from './signInSaga'
import signOutSaga from './signOutSaga'

export default function* rootSaga() {
  yield [
    fork(fetchUserSaga),
    fork(setInputSaga),
    fork(signInSaga),
    fork(signOutSaga),
  ]
}

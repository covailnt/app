import 'babel-polyfill'
import { fork } from 'redux-saga/effects'
import fetchUserSaga from './fetchUserSaga'
import signOutSaga from './signOutSaga'

export default function* rootSaga() {
  yield [
    fork(fetchUserSaga),
    fork(signOutSaga),
  ]
}

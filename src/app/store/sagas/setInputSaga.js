import 'regenerator-runtime'

import firebase from '~/.config'
import { INPUT_UPDATE_SUCCESSFUL, SET_INPUT_VAL } from '~/store/actions/types'
import { throttle } from 'lodash'
import { put, select, takeLatest } from 'redux-saga/effects'

function* updateFirebaseInput(action) {
  try {
    const getUid = state => state.user.uid
    const uid = yield select(getUid)
    const path = `users/${uid}`
    const ref = firebase.database().ref(path)
    const inputData = action.inputData
    const value = inputData.value

    yield throttle(ref.update({ [inputData.name]: value }), 300)

    yield put({ type: INPUT_UPDATE_SUCCESSFUL, inputData })
  } catch (err) {
    console.log(`Error in Set Input Saga ${err}`)
  }
}

export default function* setInput() {
  yield takeLatest(SET_INPUT_VAL, updateFirebaseInput)
}
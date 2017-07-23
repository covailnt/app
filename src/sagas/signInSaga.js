import 'babel-polyfill'
import { call, put, takeLatest } from 'redux-saga/effects'
import firebase from 'refire/firebase'
import generator from 'generate-password'
import { userFetchRequested } from 'actions'
import { SIGN_IN_REQUESTED } from 'actions/types'
import {
  CREATE_USER,
  EMAIL,
  FACEBOOK,
  GITHUB,
  GOOGLE,
  PROVIDER,
  SUCCESS,
} from 'utils/constants'

const success = (data) => {
  console.log('Successful sign in', data.user)
  return { result: SUCCESS, user: data.user }
}

// const error = (err) => {
//   console.log('Failure signing in ===> Check signInSaga', err)
//   return { result: ERROR, err }
// }

function* createUserWithEmail(data) {
  const password = generator.generate({
    length: 10,
    numbers: true,
    symbols: false,
    uppercase: true,
  })
      // _this.props.history.push('/signup/create-account/step-1')

  const createUserResult = yield firebase.auth()
    .createUserWithEmailAndPassword(data.email, password)
    .then(user => success(user))

  return createUserResult
}

function* signInWithEmail(data) {
  const signInResult = yield firebase.auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then(user => success(user))

  return signInResult
}

function* signInWithProvider(data) {
  let authProvider

  switch (data) {
    case FACEBOOK:
      authProvider = new firebase.auth.FacebookAuthProvider()
      break
    case GITHUB:
      authProvider = new firebase.auth.GithubAuthProvider()
      break
    case GOOGLE:
      console.log('setting up google auth')
      authProvider = new firebase.auth.GoogleAuthProvider()
      break
  }

  const signInResult = yield firebase.auth()
    .signInWithPopup(authProvider)
    .then(user => success(user))

  return signInResult
}

function* signIn(action) {
  try {
    const type = action.signIn.type
    const data = action.signIn.data
    let signInResult
    console.log('signInResult', type)

    switch (type) {
      case CREATE_USER:
        signInResult = yield call(createUserWithEmail, data)
        break
      case EMAIL:
        signInResult = yield call(signInWithEmail, data)
        break
      case PROVIDER:
        console.log('calling provider', data)
        signInResult = yield call(signInWithProvider, data)
        break
    }


    if (signInResult) {
      const user = signInResult.user
      const userAuthData = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      }
      console.log('userauthdata', userAuthData)
      yield put(userFetchRequested(userAuthData))
    } else {
      yield put(userFetchRequested(null))
    }
  } catch (err) {
    console.log('Error in Sign In Saga', err)
  }
}

export default function* signInSaga() {
  yield takeLatest(SIGN_IN_REQUESTED, signIn)
}

import 'isomorphic-unfetch'
import 'regenerator-runtime'

import firebase from '~/.config'
import { userFetchRequested } from '~/store/actions'
import { SIGN_IN_REQUESTED } from '~/store/actions/types'
import {
  CREATE_USER,
  EMAIL,
  FACEBOOK,
  GITHUB,
  GOOGLE,
  NEW_EMAIL,
  PROVIDER,
  SUCCESS,
} from '~/utils/constants'
import generator from 'generate-password'
import { put, takeLatest } from 'redux-saga/effects'

const success = data => {
  saveSessionOnServer(data.user)

  return { result: SUCCESS, user: data.user }
}

function saveSessionOnServer(user) {
  user.getIdToken().then(token => {
    return fetch('/api/login', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ token }),
    })
  })
}

function* createUserWithEmail(data) {
  const password = generator.generate({
    length: 10,
    numbers: true,
    symbols: false,
    uppercase: true,
  })

  // The user data returned by firebase is one level flatter
  // than the user data for an existing user so we have to pass obj
  const createUserResult = yield firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, password)
    .then(user => {
      const userData = user

      user.sendEmailVerification().catch(e => console.log(e))

      userData.history = data.history

      return success({ user: userData })
    })

  return createUserResult
}

function* signInWithEmail(data) {
  const signInResult = yield firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then(user => success(user))

  return signInResult
}

function* signInWithProvider(data) {
  let authProvider

  switch (data.provider) {
    case FACEBOOK:
      authProvider = new firebase.auth.FacebookAuthProvider()
      break
    case GITHUB:
      authProvider = new firebase.auth.GithubAuthProvider()
      break
    case GOOGLE:
      authProvider = new firebase.auth.GoogleAuthProvider()
      break
  }

  const signInResult = yield firebase
    .auth()
    .signInWithPopup(authProvider)
    .then(user => {
      const userData = user.user

      if (data.history) {
        userData.history = data.history
      }

      return success({ user: userData })
    })

  return signInResult
}

function* signIn(action) {
  try {
    const type = action.signIn.type
    const data = action.signIn.data
    let signInResult

    switch (type) {
      case CREATE_USER:
        signInResult = yield createUserWithEmail(data)
        break
      case EMAIL:
        signInResult = yield signInWithEmail(data)
        break
      case NEW_EMAIL:
        signInResult = yield createUserWithEmail(data)
        break
      case PROVIDER:
        signInResult = yield signInWithProvider(data)
        break
    }

    if (signInResult) {
      const user = signInResult.user

      const userAuthData = {
        userName: user.userName ? user.userName : null,
        email: user.email,
        history: user.history || false,
        picture: user.picture ? user.picture : null,
        uid: user.uid,
      }

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
import firebase from 'refire/firebase'
import { LOG_IN_WITH_PROVIDER } from './types'

export function logInWithProvider(provider) {
  console.log('launching login ', provider)

  let authProvider

  switch (provider) {
    case 'facebook':
      authProvider = new firebase.auth.FacebookAuthProvider()
      break
    case 'github':
      authProvider = new firebase.auth.GithubAuthProvider()
      break
    case 'google':
      authProvider = new firebase.auth.GoogleAuthProvider()
      break
  }

  firebase.auth.signInWithPopup(authProvider)
    .then((user) => {
      return {
        type: LOG_IN_WITH_PROVIDER,
        payload: user,
      }
    })
    .catch(e => console.log('auth error: ', e))
}

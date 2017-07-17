import firebase from './firebase'
import generator from 'generate-password'

export function createUserWithEmail(email, _this) {
  const password = generator.generate({
    length: 10,
    numbers: true,
    symbols: false,
    uppercase: true,
  })

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('it worked', _this.props.history)
      _this.props.history.push('/signup/create-account/step-1')
    })
    .catch(err => console.log('Firebase createUserWithEmail error', err))
}

export function logInWithEmail(email, password) {
  console.log(email, password)
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => console.log('Logged in with email successfully'))
    .catch(err => {
      console.log('Log in with email error: ', err)
    })
}

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

  firebase.auth().signInWithPopup(authProvider)
    .then(data => console.log('data', data))
    .catch(e => console.log('auth error: ', e))
}

export function logOut() {
  firebase.auth().signOut()
    .then(() => console.log('signed-out successfully'))
    .catch(err => console.log('sign-out error', err))
}

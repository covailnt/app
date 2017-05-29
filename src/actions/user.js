import firebase from 'firebase'

export const authenticate = ()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider)
}

export const logout = ()=>{
  firebase.auth().signOut()
  window.store.dispatch({
    type: 'LOGOUT'
  })
}
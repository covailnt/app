import * as firebase from 'firebase'

import dev from './dev.config'
import prod from './prod.config'

let config

if (process.env.NODE_ENV == 'production') {
  console.log('Using production config =>', process.env.NODE_ENV)
  config = prod
} else {
  console.log('Using development config')
  config = dev
}

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
  })
}

export default firebase

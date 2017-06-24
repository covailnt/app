import configData from './config'

const config = {
  apiKey: configData.firebase.apiKey,
  authDomain: configData.firebase.authDomain,
  databaseURL: configData.firebase.databaseURL,
  projectId: configData.firebase.projectId,
  storageBucket: configData.firebase.storageBucket,
  messagingSenderId: configData.firebase.messagingSenderId
}

export default config;

import firebase from './firebase'

const handler = (store, action)=>{
  if(action.type == 'SET_CURRENT_USER'){
    const uid = store.getState().currentUser.uid
    const ref = firebase.database().ref('projects')
    ref.orderByChild('owner').equalTo(uid).on('value', (_v)=>{
      let value = [];
      _v.forEach((sn)=>{
        value.push({...sn.val(), id: sn.key})
      })
      store.dispatch({
        type: 'SET_PROJECTS',
        value: value
      })
    })
  }
}

export default handler
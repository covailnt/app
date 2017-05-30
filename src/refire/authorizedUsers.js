import firebase from './firebase'

const handler = (store, action)=>{
  if(action.type == 'SET_CURRENT_PROJECT'){
    const ref = firebase.database().ref('authorizedProjects')
    ref.orderByChild('projectId').equalTo(action.value.id).on('value', (_v)=>{
      let value = [];

      _v.forEach((sn)=>{
        value.push({...sn.val(), id: sn.key})
      })
      store.dispatch({
        type: 'SET_AUTHORIZED_USERS',
        value: value
      })
    })
  }
}

export default handler
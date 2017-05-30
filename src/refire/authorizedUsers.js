import firebase from './firebase'

let initialized = false
const handler = (store, action)=>{
  const state = store.getState()
  if(action.type == 'SET_CURRENT_PROJECT' || (!initialized && state.currentProject)){
    initialized = true
    const ref = firebase.database().ref('authorizedProjects')
    let id = (action.value || {}).id || state.currentProject.id

    ref.orderByChild('projectId').equalTo(id).on('value', (_v)=>{
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
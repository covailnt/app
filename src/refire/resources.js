import firebase from './firebase'

let initialized = false
const handler = (store, action)=>{
  const state = store.getState()
  const {currentProject} = state;
  if(action.type == 'SET_CURRENT_PROJECT' || (currentProject && !initialized)){
    initialized = true;
    const id = store.getState().currentProject.id
    const ref = firebase.database().ref('resources')
    ref.orderByChild('projectId').equalTo(id).on('value', (_v)=>{
      let value = [];
      _v.forEach((sn)=>{
        value.push({...sn.val(), id: sn.key})
      })
      
      store.dispatch({
        type: 'SET_RESOURCES',
        value: value.sort((a, b)=>(
          a.date > b.date
        ))
      })
    })
  }
}

export default handler
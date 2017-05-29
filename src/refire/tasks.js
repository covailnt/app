import firebase from './firebase'

let initialized = false
const handler = (store, action)=>{
  const state = store.getState()
  const {currentGoal} = state;
  
  if(action.type == 'SET_CURRENT_GOAL' || (currentGoal && !initialized)){
    initialized = true;
    const id = store.getState().currentGoal.id
    const ref = firebase.database().ref('tasks')
    ref.orderByChild('goalId').equalTo(id).on('value', (_v)=>{
      let value = [];
      _v.forEach((sn)=>{
        value.push({...sn.val(), id: sn.key})
      })
      store.dispatch({
        type: 'SET_TASKS',
        value: value
      })
    })
  }
}

export default handler
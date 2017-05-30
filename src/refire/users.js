import firebase from './firebase'

let initialized = false
const handler = (store)=>{
  if(!initialized){
    initialized = true;
    const ref = firebase.database().ref('users')
    ref.on('value', (_v)=>{
      let value = [];
      _v.forEach((sn)=>{
        value.push({...sn.val(), id: sn.key})
      })
      
      store.dispatch({
        type: 'SET_USERS',
        value: value.sort((a, b)=>(
          a.date > b.date
        ))
      })
    })
  }
}

export default handler
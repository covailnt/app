import firebase from './firebase'

const handler = (store, action)=>{
  if(action.type == 'SET_CURRENT_USER'){
    const uid = store.getState().currentUser.uid
    const ref = firebase.database().ref('authorizedProjects')
    ref.orderByChild('owner').equalTo(uid).on('value', (_v)=>{
      let value = [];

      _v.forEach((sn)=>{
        firebase.database().ref('projects/'+ sn.val().projectId).once('value').then((snpr)=>{
          value.push({...snpr.val(), id: snpr.key})
          store.dispatch({
            type: 'SET_PROJECTS',
            value: value
          })
        })
      })
    })
  }
}

export default handler
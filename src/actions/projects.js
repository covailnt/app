import firebase from 'firebase'
const projects = ()=>(
  firebase.database().ref('projects')
)

const currentUser = ()=>(
  firebase.auth().currentUser
)

export const create = (options)=>{
  const values = {
    name: options.name,
    description: options.description || '',
    owner: currentUser().uid
  }

  projects().push(values);
}

export const setCurrent = (value)=>(
  {
    type: 'SET_CURRENT_PROJECT',
    value
  }
)

export const getCurrent = ()=>(
  window.store.getState().currentProject
)
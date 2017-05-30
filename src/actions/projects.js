import firebase from 'firebase'
const projects = ()=>(
  firebase.database().ref('projects')
)
const authorizedProjects = ()=>(
  firebase.database().ref('authorizedProjects')
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
  projects().push(values).then((sn)=>{
    authorizedProjects().push({
      projectId: sn.key,
      owner: currentUser().uid
    })
  })
}

export const authorizeUser = (id, user)=>{
  authorizedProjects().push({
    projectId: id,
    owner: user.id
  })
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
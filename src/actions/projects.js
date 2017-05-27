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
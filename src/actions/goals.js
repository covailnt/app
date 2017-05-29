import firebase from 'firebase';
import * as projects from './projects';

const goals = ()=>(
  firebase.database().ref('goals')
)

const currentUser = ()=>(
  firebase.auth().currentUser
)

export const create = (options)=>{
  const project = projects.getCurrent()
  if(project){
    const values = {
      name: options.name,
      description: options.description || '',
      projectId: project.id,
      date: options.date,
      owner: currentUser().uid
    }

    goals().push(values);
  }
}
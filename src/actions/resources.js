import firebase from 'firebase';
import * as projects from './projects';

const resources = ()=>(
  firebase.database().ref('resources')
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
      type: options.type,
      projectId: project.id,
      owner: currentUser().uid
    }

    resources().push(values);
  }
}
export const setCurrent = (value)=>(
  window.store.dispatch({
    type: 'SET_CURRENT_RESOURCE',
    value
  })
)
export const getCurrent = ()=>(
  window.store.getState().currentResource
)


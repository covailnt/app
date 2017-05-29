import firebase from 'firebase';
import * as goals from './goals';

const tasks = ()=>(
  firebase.database().ref('tasks')
)

const currentUser = ()=>(
  firebase.auth().currentUser
)

export const create = (options)=>{
  const goal = goals.getCurrent()
  if(goal){
    const values = {
      name: options.name,
      description: options.description || '',
      goalId: goal.id,
      resourceId: options.resourceId,
      owner: currentUser().uid
    }

    tasks().push(values);
  }
}

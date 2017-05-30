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
      points: options.points,
      type: options.type,
      status: '',
      owner: currentUser().uid
    }
    if(options.resourceId){
      values.resourceId = options.resourceId
    }
    tasks().push(values);
  }
}

export const updateStatus = (id, value)=>{
  let val = '';
  if(value == '' || !value){
    val = 'started'
  }else if(value == 'started'){
    val = 'completed'
  }

  tasks().child(id).child('status').set(val);
}

export const toggleTimer = (id, value)=>{
  if(value){
    const end = new Date().getTime()
    firebase.database().ref('timers').push({
      start: value,
      end: end,
      duration: end - value,
      owner: currentUser().uid,
      projectId: window.store.getState().currentProject.id,
      taskId: id
    })
    tasks().child(id).child('timerStart').remove();
  }else{
    tasks().child(id).child('timerStart').set(new Date().getTime());
  }
}

export const assignTask = (id, value)=>{
  tasks().child(id).child('resourceId').set(value);
}

import {Component} from 'react';
import {connect} from 'react-redux';
import CreateTask from '../CreateTask';
import style from './style';

class Tasks extends Component {
  constructor(){
    super();
    this.resource = this.resource.bind(this);
    this.state = {};
  }
  get currentUser(){
    return this.props.currentUser || {}
  }
  get tasks(){
    return this.props.tasks || []
  }
  resource(id){
    return this.props.resources.find((resource)=>(
      resource.id == id
    )) || {}
  }
  goal(id){
    return this.props.goals.find((goal)=>(
      goal.id == id
    )) || {}
  }
  render(){
    return (
      <div>
        <CreateTask />
        <br />
        {this.tasks.map((task)=>(
          <div className={style('taskContainer')}>
            <div key={task.id} className={style('task')}>
              <div className={style('taskTitle')}>{task.name}</div>
              <div className={style('taskDescription')}>{task.description}</div>
              <div className={style('taskAssignment')}>{this.resource(task.resourceId).name || (<span>&nbsp;</span>)}</div>
              <div className={style('taskDate')}>
                {this.goal(task.goalId).date}
                <span>&nbsp;</span>
                {this.goal(task.goalId).name}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    tasks: state.tasks,
    goals: state.goals,
    resources: state.resources
  }
}

export default connect(mapStateToProps)(Tasks)

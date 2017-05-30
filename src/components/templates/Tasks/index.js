import {Component} from 'react';
import {connect} from 'react-redux';
import CreateTask from '../CreateTask';
import style from './style';
import {Fa} from 'components/elements';
import AssignTask from '../AssignTask';
import Timer from '../Timer';
import {taskActions} from 'actions';

class Tasks extends Component {
  constructor(){
    super();
    this.resource = this.resource.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.showTaskAssignment = this.showTaskAssignment.bind(this);
    this.closeTaskAssignment = this.closeTaskAssignment.bind(this);
    this.state = {};
  }
  get currentUser(){
    return this.props.currentUser || {}
  }
  get tasks(){
    return this.props.tasks || []
  }
  resource(id){
    const rs = this.props.resources.find((resource)=>(
      resource.id == id
    )) || {name: ''}
    return rs.name.split(' ').map((n)=>(n[0])).join('')
  }
  updateStatus(task){
    taskActions.updateStatus(task.id, task.status)
  }
  toggleTimer(task){
    taskActions.toggleTimer(task.id, task.timerStart)
  }
  showTaskAssignment(task){
    this.setState({
      currentTaskId: task.id,
      showTaskAssignment: true
    })
  }
  closeTaskAssignment(){
    this.setState({
      showTaskAssignment: false
    })
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
        <AssignTask taskId={this.state.currentTaskId} visible={this.state.showTaskAssignment} onClose={this.closeTaskAssignment}/>
        <br />
        {this.tasks.map((task)=>(
          <div className={style('taskContainer')} key={task.id}>
            <div className={style('task')}>
              <div className={style('taskAssignment')} onClick={this.showTaskAssignment.bind(null, task)}>
                {this.resource(task.resourceId) || (<span><Fa icon='plus' /></span>)}
              </div>
              <div className={style('taskPoints')}>
                {task.points || (<span>&nbsp;&nbsp;</span>)}
              </div>
              <div className={style(`taskType${task.type}`)}>
                {task.type[0] || (<span>&nbsp;&nbsp;</span>)}
              </div>
              <div className={style('container')}>
                <div className={style('taskTitle')}>
                  {task.name}
                  <div onClick={this.updateStatus.bind(null, task)} className={style('status')}>
                    {task.status == 'started' && (<Fa icon='play' />)}
                    {task.status == 'completed' && (<Fa icon='check' />)}
                  </div>
                </div>
                <div className={style('taskDescription')}>{task.description}</div>
                <div className={style('taskDate')}>
                  {(this.goal(task.goalId).date || '').split('-').slice(1,3).join('/')}<span>&nbsp;</span>
                </div>
                <div onClick={this.toggleTimer.bind(null, task)} className={style('timer')}>
                  {task.timerStart ? (
                    <Fa icon='square' className={style('stop')} />
                  ):(
                    <Fa icon='circle' className={style('record')}  />
                  )}
                  &nbsp;
                  <Timer startTime={task.timerStart} />
                </div>
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

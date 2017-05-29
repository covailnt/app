import {Component} from 'react';
import {connect} from 'react-redux';

class Tasks extends Component {
  constructor(){
    super();
    this.state = {};
  }
  get currentUser(){
    return this.props.currentUser || {}
  }
  get tasks(){
    return Object.entries(this.props.tasks || {})
  }
  render(){
    return (
      <div>
        Tasks
        {this.tasks.map(([id, task])=>(
          <div key={id}>
            {task.name}
          </div>
        ))}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(Tasks)

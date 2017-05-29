import {Component} from 'react';
import CreateGoal from '../CreateGoal';
import {connect} from 'react-redux';
class Goals extends Component {
  constructor(){
    super();
    this.state = {};
  }
  get currentUser(){
    return this.props.currentUser || {}
  }
  get goals(){
    return this.props.goals || []
  }
  render(){
    return (
      <div>
        <CreateGoal />
        {this.goals.map((goal)=>(
          <div key={goal.id}>
            {goal.name}
          </div>
        ))}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    goals: state.goals
  }
}

export default connect(mapStateToProps)(Goals)
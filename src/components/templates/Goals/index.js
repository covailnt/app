import {Component} from 'react';
import CreateGoal from '../CreateGoal';
import {connect} from 'react-redux';
import {Fa} from 'components/elements';
import style from './style';

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
        <div className={style('goals')}>
          {this.goals.map((goal)=>(
            <div key={goal.id} className={style('goal')}>
              <Fa icon='circle' className={style('marker')}/>
              <span className={style('name')}>{goal.name}</span>
              <br />
              {goal.date}
              <br />
            </div>
          ))}
        </div>
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
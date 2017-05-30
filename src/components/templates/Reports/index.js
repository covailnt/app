import {Component} from 'react';
import style from './style';
import {connect} from 'react-redux';
import firebase from 'refire/firebase';
import moment from 'moment';

class Projects extends Component {
  constructor(){
    super();
    
    this.state = {report: []};
    this.totalDuration = this.totalDuration.bind(this)
  }
  componentDidMount(){
    firebase.database()
    .ref('timers')
    .orderByChild('projectId')
    .equalTo(this.props.currentProject.id)
    .on('value', (k)=>{
      const values = [];
      k.forEach((i)=>{
        values.push(i.val())
      })
      this.setState({report: values})
    })
  }
  user(id){
    const a =this.props.users.find((user)=>{
      return user.id == id
    })
    return a || {displayName: ''};
  }
  totalDuration(){
    return this.state.report.reduce((a, b)=>{
      if(a != 0){
        return Number(a.duration) + Number(b.duration)
      }else{
        return a + Number(b.duration)
      }
    }, 0)
  }
  render(){
    return (
      <div>
        <div>
          <table className={style('reportContainer')}>
            <tbody>
              {this.state.report.map((r,i)=>(
                <tr key={i}>
                  <td>
                    {moment.utc(r.duration).format('HH:mm:ss')}
                  </td>
                  <td>
                    {moment(r.start).format('MM/DD')}
                  </td>
                  <td>
                    {moment(r.start).format('HH:mm:ss')} - {moment(r.end).format('HH:mm:ss')}
                  </td>
                  <td>
                    {this.user(r.owner).displayName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          Total: {moment.utc(this.totalDuration()).format('HH:mm:ss')}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentProject: state.currentProject,
    users: state.users
  }
}

export default connect(mapStateToProps)(Projects)
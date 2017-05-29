import {Component} from 'react';
import style from './style';
import moment from 'moment';

class Tasks extends Component {
  constructor(){
    super();
    this.state = {};
  }
  componentDidMount(){
    this.interval = setInterval(()=>{
      if(this.props.startTime){
        this.setState({
          value: moment.utc(new Date().getTime() - this.props.startTime).format('HH:mm:ss')
        })
      }else{
        this.setState({
          value: ''
        })
      }
    }, 1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render(){
    return (
      <div className={style('count')}>
        {this.state.value}
      </div>
    )
  }
}

export default Tasks

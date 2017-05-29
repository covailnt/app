import {Component} from 'react';
import {connect} from 'react-redux';
import CreateResource from '../CreateResource'

class Resources extends Component {
  constructor(){
    super();
    this.state = {};
  }
  get currentUser(){
    return this.props.currentUser() || {}
  }
  get resources(){
    return this.props.resources || []
  }
  render(){
    return (
      <div>
        <CreateResource />
        {this.resources.map((resource)=>(
          <div key={resource.id}>
            {resource.name}
          </div>
        ))}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    resources: state.resources
  }
}

export default connect(mapStateToProps)(Resources)

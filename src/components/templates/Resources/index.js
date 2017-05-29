import {Component} from 'react';
import {connect} from 'react-redux';

class Resources extends Component {
  constructor(){
    super();
    this.state = {};
  }
  get currentUser(){
    return this.props.currentUser() || {}
  }
  get resources(){
    return Object.entries(this.props.resources || {})
  }
  render(){
    return (
      <div>
        Resources
        {this.resources.map(([id, resource])=>(
          <div key={id}>
            {resource.name}
          </div>
        ))}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(Resources)

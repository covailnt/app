import {Component} from 'react';
import {connect} from 'react-redux';
import CreateResource from '../CreateResource'
import {Fa} from 'components/elements'
import style from './style'

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
  type(type){
    if(type == 'Person'){
      return 'user'
    }else if(type == 'Place'){
      return 'map-signs'
    }else{
      return 'cube'
    }
  }
  render(){
    return (
      <div>
        <CreateResource />
        {this.resources.map((resource)=>(
          <div key={resource.id} className={style('resourceContainer')}>
            <div className={style('resource')}>
              <div className={style('resourceTitle')}>
                <Fa icon={this.type(resource.type)} className={style('icon')}/>
                {resource.name}
              </div>
              <div className={style('resourceDescription')}>
                {resource.description}
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
    resources: state.resources
  }
}

export default connect(mapStateToProps)(Resources)

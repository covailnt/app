import {Component} from 'react';
import {projectActions} from 'actions';
import style from './style';
import {Fa} from 'components/elements';
import {connect} from 'react-redux';

class Projects extends Component {
  constructor(){
    super();
    
    this.state = {};
    this.handleProject = this.handleProject.bind(this);
  }
  get currentUser(){
    return this.props.currentUser || {}
  }
  get projects(){
    return this.props.projects || []
  }
  handleProject(project){
    this.props.dispatch(
      projectActions.setCurrent(project)
    )
    this.props.history.push('/goals');
  }
  render(){
    return (
      <div>
        {this.projects.map((project)=>(
          <div
            key={project.id}
            className={style('project')}
          >
            <div className={style('name')}>
              {project.name}
              <span onClick={this.handleProject.bind(null, project) } className={'pull-right'}>
                <Fa className={style('launch')} icon={'chevron-right'} />
              </span>
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
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects)
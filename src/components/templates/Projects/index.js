import {Component} from 'react';
import {projectActions} from 'actions';
import style from './style';
import {Fa} from 'components/elements';
import {connect} from 'react-redux';
import CreateProject from '../CreateProject';

class Projects extends Component {
  constructor(){
    super();
    
    this.state = {};
    this.handleProject = this.handleProject.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
  handleSelect(project){
    this.setState({project})
  }
  get currentProject(){
    return this.state.project || this.props.currentProject || this.props.projects[0] || {}
  }
  render(){
    return (
      <div>
        <div className={style('projectsContainer')}>
          <CreateProject />
          {this.projects.map((project)=>(
            <div
              key={project.id}
              className={style('project')}
            >
              <div onClick={this.handleSelect.bind(null, project)}>
                <span className={style('name')}>{project.name}</span>
                <span onClick={this.handleProject.bind(null, project) } className={'pull-right'}>
                  <Fa className={style('launch')} icon={'folder-open'} />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={style("projectContainer")}>
          <div className={style("projectName")}>
            {this.currentProject.name}
          </div>
          <div className={style("projectDescription")}>
            {this.currentProject.description}
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    projects: state.projects,
    currentProject: state.currentProject
  }
}

export default connect(mapStateToProps)(Projects)
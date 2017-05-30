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
    this.authorizeUser = this.authorizeUser.bind(this);
    this.isAuthorized = this.isAuthorized.bind(this)
    this.isNotAuthorized = this.isNotAuthorized.bind(this)
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
    this.props.dispatch(
      projectActions.setCurrent(project)
    )
  }
  get currentProject(){
    return this.props.currentProject
  }
  authorizeUser(projectId, user){
    projectActions.authorizeUser(projectId, user)
  }
  isAuthorized(user){
    return this.props.authorizedUsers.find((au)=>{
      return au.owner == user.id
    })
  }
  isNotAuthorized(user){
    return !this.props.authorizedUsers.find((au)=>( au.owner == user.id))
  }
  render(){
    return (
      <div>
        <div className={style('projectsContainer')}>
          <CreateProject />
          {this.projects.map((project, i)=>(
            <div
              key={i}
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
        <div className={style('projectContainer')}>
          {this.currentProject ? (
            <div>
              <div className={style('projectName')}>
                {this.currentProject.name}
              </div>
              <div className={style('projectDescription')}>
                {this.currentProject.description}
              </div>
              Authorized Users:
              {this.props.users.filter(this.isAuthorized).map((user)=>(
                <div key={user.id}
                  className={style('user')}
                >
                    {user.displayName}
                </div>
              ))}
              <br />
              Users:
              {this.props.users.filter(this.isNotAuthorized).map((user)=>(
                <div key={user.id}
                  onClick={this.authorizeUser.bind(null, this.currentProject.id, user)}
                  className={style('user')}
                >
                    {user.displayName}
                </div>
              ))}
            </div>
          ):(
            <div>
              You have not selected a project choose one to the left or create one to get started!
            </div>
          )}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    projects: state.projects,
    currentProject: state.currentProject,
    users: state.users,
    authorizedUsers: state.authorizedUsers
  }
}

export default connect(mapStateToProps)(Projects)
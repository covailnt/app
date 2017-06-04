import { Component } from 'react'
import {userActions, projectActions} from 'actions'
import {Iris, TopBar, NavItem} from 'components/elements'
import {AccountMenu} from 'components/templates'
import Routes from './routes'
import {connect} from 'react-redux';

class Content extends Component{
  constructor(){
    super();
    this.setHello = this.setHello.bind(this);
    this.handleHello = this.handleHello.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRoot = this.handleRoot.bind(this);
    this.params = {};
  }
  setHello(){
    projectActions.create(this.params)
  }
  handleHello(e){
    this.params.name = e.target.value;
  }
  handleLogout(){
    userActions.logout()
  }
  handleRoot(){
    this.props.history.push('/')
  }
  render(){
    return (
      <div>
        <TopBar>
          <Iris onClick={this.handleRoot}/>
          <nav>
            {this.props.currentProject &&
              <NavItem href='/goals'>
                Goals
              </NavItem>
            }
            {this.props.currentGoal &&
              <NavItem href='/tasks'>
                Tasks
              </NavItem>
            }
            {this.props.currentProject &&
              <NavItem href='/resources'>
                Resources
              </NavItem>
            }
            {this.props.currentProject &&
              <NavItem href='/reports'>
                Reports
              </NavItem>
            }
          </nav>
          <AccountMenu />
        </TopBar>
        <Routes />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    currentProject: state.currentProject,
    currentGoal: state.currentGoal
  }
}

export default connect(mapStateToProps)(Content)

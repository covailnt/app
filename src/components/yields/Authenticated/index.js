import { Component } from 'react'
import {userActions, projectActions} from 'actions'
import {Iris, TopBar, NavItem} from 'components/elements'
import {AccountMenu} from 'components/templates'
import Routes from './routes'

class Content extends Component{
  constructor(){
    super();
    this.setHello = this.setHello.bind(this);
    this.handleHello = this.handleHello.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
  render(){
    return (
      <div>
        <TopBar>
          <Iris />
          <nav>
            <NavItem href='/projects'>
              Projects
            </NavItem>
            <NavItem href='/goals'>
              Goals
            </NavItem>
            <NavItem href='/tasks'>
              Tasks
            </NavItem>
            <NavItem href='/resources'>
              Resources
            </NavItem>
          </nav>
          <AccountMenu />
        </TopBar>
        <Routes />
      </div>
    )
  }
}

export default Content
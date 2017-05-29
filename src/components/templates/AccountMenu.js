import {MenuItem, MenuItems, MenuButton} from 'components/elements';
import {Component} from 'react';
import {userActions} from 'actions';
import {connect} from 'react-redux';

class AccountMenu extends Component {
  constructor(){
    super();
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
  }
  handleLogout(){
    userActions.logout()
  }
  handleVisibility(value){
    this.setState({
      visible: value
    })
  }
  get currentUser(){
    return this.props.currentUser || {}
  }
  render(){
    return (
      <div className='account-menu pull-right' onMouseLeave={this.handleVisibility.bind(null, false)} onMouseEnter={this.handleVisibility.bind(null, true)}>
        <MenuButton>{this.currentUser.displayName}</MenuButton>
        {this.state.visible && (
          <MenuItems className='pull-right'>
            <MenuItem onClick={this.handleLogout} className="pointer">
              Logout
            </MenuItem>
          </MenuItems>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(AccountMenu)
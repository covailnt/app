import { Component } from 'react'
import {userActions} from 'actions'

import {Button, Iris} from 'components/elements'
class Content extends Component{
  constructor(){
    super();
    this.handleAuthenticate = this.handleAuthenticate.bind(this);
  }
  handleAuthenticate(){
    userActions.authenticate();
  }
  render(){
    return (
      <div>
        <Iris />
        <Button onClick={this.handleAuthenticate}>
          Authenticate
        </Button>
      </div>
    )
  }
}

export default Content
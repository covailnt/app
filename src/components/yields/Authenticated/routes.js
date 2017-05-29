import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Projects, Goals, Tasks, Resources  } from 'components/templates'

class Routes extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <Switch>
        <Route path="/projects" component={Projects}/>
        <Route path="/goals" component={Goals}/>
        <Route path="/tasks" component={Tasks}/>
        <Route path="/resources" component={Resources}/>
      </Switch>
    )
  }
}

export default Routes
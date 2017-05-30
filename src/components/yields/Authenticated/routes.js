import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Projects, Goals, Tasks, Resources, Reports } from 'components/templates'
import style from './style'

class Routes extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className={style('container')}>
        <Switch>
          <Route path="/goals" component={Goals}/>
          <Route path="/tasks" component={Tasks}/>
          <Route path="/resources" component={Resources}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/" component={Projects}/>
        </Switch>
      </div>
    )
  }
}

export default Routes
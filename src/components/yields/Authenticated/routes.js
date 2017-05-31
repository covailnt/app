import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ProfileDonut, Projects, Tasks } from 'components/templates'
import style from './style'

class Routes extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className={style('container')}>
        <Switch>
          <Route path="/profile" component={ProfileDonut} />
          <Route path="/tasks" component={Tasks}/>
          <Route path="/" component={Projects}/>
        </Switch>
      </div>
    )
  }
}

export default Routes

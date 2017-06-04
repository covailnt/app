import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ProfileDonut } from 'components/wrappers'
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
        </Switch>
      </div>
    )
  }
}

export default Routes

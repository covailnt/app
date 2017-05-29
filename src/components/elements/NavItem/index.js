import style from './style';
import { Switch, Route, Link } from 'react-router-dom'

const NavItem = (props)=>{
  const link = (_props)=>(
    <Link to={props.href} className={style('item', _props.active)}>
      {props.children}
    </Link>
  )

  return (
    <Switch>
      <Route path={props.href} component={link.bind(null, {active: true})}/>
      <Route component={link.bind(null, {active: false})} />
    </Switch>
  )
}
export default NavItem;
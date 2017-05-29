import Button from './style'

export default (props)=>(
  <Button onClick={props.onClick}>{props.children}</Button>
)
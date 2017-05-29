import MenuButton from './style'

export default (props)=>(
  <MenuButton onClick={props.onClick}>{props.children}</MenuButton>
)
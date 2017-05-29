import MenuItems from './style'

export default (props)=>(
  <MenuItems className={props.className}>
    {props.children}
  </MenuItems>
)
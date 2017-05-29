import MenuItem from './style'

export default (props)=>(
  <MenuItem onClick={props.onClick} className={props.className}>
    {props.children}
  </MenuItem>
)
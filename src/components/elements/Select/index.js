import Select from './style'
export default (props)=>(
  <Select
    onChange={props.onChange}
    value={props.value}
    className={`input-${props.type} ${props.className}`}
  >
    {props.children}
  </Select>
)
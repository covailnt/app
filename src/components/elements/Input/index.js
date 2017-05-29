import Input from './style'
export default (props)=>(
  <Input
    type={props.type}
    onChange={props.onChange}
    value={props.value}
    className={`input-${props.type} ${props.className}`}
    placeholder={props.placeholder}
  />
)
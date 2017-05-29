import TextArea from './style'
export default (props)=>(
  <TextArea
    onChange={props.onChange}
    value={props.value}
    className={`textarea ${props.className}`}
    placeholder={props.placeholder}
  />
)
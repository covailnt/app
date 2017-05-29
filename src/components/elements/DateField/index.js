import Input from '../Input';
const DateField = (props)=>{
  const _props = Object.assign(
    {type: 'date'},
    props
  );
  return Input(_props);
}
export default DateField;
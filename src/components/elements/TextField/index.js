import Input from '../Input';
const TextField = (props)=>{
  const _props = Object.assign(
    {type: 'text'},
    props
  );
  return Input(_props);
}
export default TextField;
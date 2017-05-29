import style from './style';

const TopBar = (props)=>(
  <ul className={style('ul')}>
    {props.children.map((child, i)=>(
      <li className={style('li')} key={i}>
        {child}
      </li>
    ))}
  </ul>
)
export default TopBar;
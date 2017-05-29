import style from './style';
import {Fa} from 'components/elements';

const Modal = (props)=>(
  props.visible ? (
  <div className={style('modal')}>
    <div className={style('modalContent')}>
      <div className={style('modalTitle')}>{props.title}</div>
      <span className={style('modalClose')} onClick={props.onClose}><Fa icon='close' /></span>
      { props.children }
    </div>
  </div>
  ): (<span></span>)
)

export default Modal;

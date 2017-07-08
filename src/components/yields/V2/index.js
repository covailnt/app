import style from './style.scss'
import statusImg from 'images/status_image.png'

const MainComponent = ()=>{
  return (
    <div className={style.flex-col}>
      <aside className={style.sidebar}>
        <div className={style.sidebar__status}>
          <div className={style.sidebar__status-image}>
            <img src={statusImg} alt="Current Status" />
          </div>
          <p>This week I am:</p>
          <form>
            <select>
              <option>Not working</option>
              <option>Really Light</option>
              <option>Kinda Light</option>
              <option>Not that Busy</option>
              <option>Kinda Busy</option>
              <option>Really Busy</option>
              <option>Slammed</option>
            </select>
          </form>
        </div>
      </aside>
    </div>
  )
}

export default MainComponent;
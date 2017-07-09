import { Link } from 'react-router-dom'
import style from './style.scss'
import statusImg from 'images/status_image.png'

const SidebarComponent = ()=>{
  return (
		<aside className={style.sidebar}>
			<div className={style.sidebarStatus}>
				<div className={style.sidebarStatusImage}>
					<img src={statusImg} alt="Current Status" />
				</div>
			</div>
			<div className={style.statusCnt}>
				<p>This week I am:</p>
				<form className={style.statusSelect}>
					<select>
						<option>Not working</option>
						<option>Really Light</option>
						<option>Kinda Light</option>
						<option>Not that Busy</option>
						<option>Kinda Busy</option>
						<option>Really Busy</option>
						<option>Slammed</option>
					</select>
					<button type="submit" className={style.btnPrimary}>Update Availability</button>
				</form>
				<p className={style.statusMsg}>
					<span>You are up to date.</span>
					<br />
					Last Updated: Today
					<br />
					Expires in: 7 days
				</p>
			</div>

			<nav className={style.nav}>
				<ul className={style.sidebarNav}>
					<li>
						<Link to="profile">Profile <span className={style.profileEdit}>edit</span></Link>
					</li>
					<li>
						<Link to="contacts">Contacts <span className={style.badge}>1</span></Link>
					</li>
					<li>
						<Link to="chat">Chat</Link>
					</li>
					<li>
						<Link to="colab">Colab Sessions</Link>
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default SidebarComponent;
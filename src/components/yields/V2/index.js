import { Link } from 'react-router-dom'
import style from './style.scss'
import statusImg from 'images/status_image.png'

const MainComponent = ()=>{
  return (
		<div>
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
				</div>

				<nav className={style.nav}>
					<ul className={style.sidebarNav}>
						<li>
							<Link to="profile">Profile</Link>
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

			<header className={style.header}>
				<div className={style.headerEdit}>
					<p>
						<Link to="exit">Exit edit mode</Link>
						Profile: 20% complete
					</p>
				</div>

				<div className={style.headerStats}>
					Rank Earned 005
					Rank Potential 99
					<div className={style.headerLogout}>
						<Link to="logout"><img src="//placehold.it/50x50" /></Link>
					</div>
				</div>
			</header>
		</div>
  )
}

export default MainComponent;
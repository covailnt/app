import { Link } from 'react-router-dom'
import style from './style.scss'
import statusImg from 'images/status_image.png'
import HeaderComponent from 'components/wrappers/Header'
import SidebarComponent from 'components/wrappers/Sidebar'

const MainComponent = ()=>{
  return (
		<div>
			<SidebarComponent />
			<HeaderComponent />

			<section className={style.profile}>
				<div className={style.profileCover}>
					<p>Drop cover photo here</p>
				</div>
				<div className={style.profileMain}>
					<h1>Username</h1>
					<p>Specialty in <input type="text" placeholder="Enter city or specify Nomad" className={style.formField} /></p>
				</div>
				<div className={style.profilePhoto}>
					<img src="//placehold.it/300x300" alt="Profile Photo" />
				</div>
				<div className={style.profileStats}>
					005 Rank Earned
					99/100 Potential Rank
				</div>
			</section>
		</div>
  )
}

export default MainComponent;
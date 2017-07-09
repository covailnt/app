import { Link } from 'react-router-dom'
import style from './style.scss'

const HeaderComponent = ()=>{
  return (
		<header className={style.header}>
			<div className={style.headerEdit}>
				<ul className={style.headerList}>
					<li><Link to="exit">Exit edit mode</Link></li>
					<li>Profile: 20% complete</li>
				</ul>
			</div>

			<div className={style.headerStats}>
				<ul className={style.headerList}>
					<li><span>Rank<br />Earned</span><span>005</span></li>
					<li><span>Rank<br />Potential</span><span>99</span></li>
					<li className={style.headerLogout}>
						<Link to="logout"><img src="//placehold.it/50x50" /></Link>
					</li>
				</ul>
			</div>
		</header>
  )
}

export default HeaderComponent;
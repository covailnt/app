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
		</div>
  )
}

export default MainComponent;
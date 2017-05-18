import React from 'react'
import Navbar from '../../groups/Navbar'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

const CoreLayout = ({ children }) => (
  <div className={classes.container}>
    <Navbar />
    <div className={classes.children}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout

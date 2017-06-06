import React from 'react'
import './Fa.scss'

const Fa = ({icon, size, className, ...props}) => {
  return size
    ? <i className={`fa fa-${icon} fa-${size} ${className}`} {...props}></i>
    : <i className={`fa fa-${icon} ${className}`} {...props}></i>
}

export default Fa

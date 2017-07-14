import React from 'react'
import theme from 'theme'
import classes from './Input.scss'

const Input = ({ className, color, type, onChange, onBlur, value, placeholder }) => (
  <input
    className={`input-${type} ${className} ${classes.input}`}
    onBlur={onBlur}
    onChange={onChange}
    placeholder={placeholder}
    style={{ border: `1px solid ${theme.color[color]}` }}
    type={type}
    value={value || ''}
  />
)

export default Input

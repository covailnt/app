import React from 'react'

const Button = (props) => (
  <button onClick={props.onclick}>{props.children}</button>
)

export default Button


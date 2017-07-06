import React from 'react'
import styled from 'styled-components'
import theme from 'theme'

const StyledInput = styled.input`
  background-color: #e9ecf1;
  color: #383f4a;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 19px;
  border: 0px;
  box-sizing: border-box;
`

const Input = ({ className, color, type, onChange, onBlur, value, placeholder }) => (
  <StyledInput
    className={`input-${type} ${className}`}
    onBlur={onBlur}
    onChange={onChange}
    placeholder={placeholder}
    style={{ border: `1px solid ${theme.color[color]}` }}
    type={type}
    value={value || ''}
  />
)

export default Input

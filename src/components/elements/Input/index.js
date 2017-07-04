import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background-color: #e9ecf1;
  color: #383f4a;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 19px;
  border: 0px;
  box-sizing: border-box;
`

const Input = ({ className, type, onChange, onBlur, value, placeholder }) => (
  <StyledInput
    type={type}
    onChange={onChange}
    onBlur={onBlur}
    value={value || ''}
    className={`input-${type} ${className}`}
    placeholder={placeholder}
  />
)

export default Input

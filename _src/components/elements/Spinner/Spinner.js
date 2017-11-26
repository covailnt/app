import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Spinner = styled.div`
  position: relative;
  border: 0.2em solid black;
  border-bottom-color: black;
  border-radius: 50%;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  animation: ${rotate360} 2s linear infinite;
`

export default Spinner

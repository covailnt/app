import { SET_INPUT_VAL } from 'actions/types'

const setInputVal = inputData => (
  { type: SET_INPUT_VAL, inputData }
)

export default setInputVal

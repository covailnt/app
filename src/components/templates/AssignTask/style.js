import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  split50: {
    display: 'inline-block',
    width: '50%',
    boxSizing: 'border-box',
    padding: '1em'
  },
  row: {
    marginLeft: '-1em',
    marginRight: '-1em'
  }
})

export default (handler)=>{
  let cs = stylesheet[handler];

  return css(cs)
}
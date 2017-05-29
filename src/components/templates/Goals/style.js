import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  goal: {
    textAlign: 'left',
    position: 'relative',
    display: 'block',
    margin: '1em 1em',
    verticalAlign: 'middle'
  },
  goals: {
    marginTop: '2em',
    borderLeft: '3px solid #79808e',
    position: 'relative',
    width: '16em'
  },
  name:{
    color: '#afd0f7',
    fontWeight: 'bold'
  },
  marker:{
    display: 'inline-block',
    position: 'absolute',
    left: '-1.5em',
    color: '#afd0f7'
  }
})

export default (handler)=>{
  let cs = stylesheet[handler];

  return css(cs)
}
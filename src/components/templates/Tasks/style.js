import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  taskContainer: {
    boxSizing: 'border-box',
    width: '49%',
    display: 'inline-block'
  },
  task: {
    margin: '1em',
    backgroundColor: '#323a45',
    borderRadius: '8px 0px 8px 0px',
    overflow: 'hidden',
    display: 'block'
  },
  taskTitle: {
    padding: '1em',
    fontWeight: 600,
    color: '#abcbf1',
    backgroundColor: '#2c333e'
  },
  taskDescription:{
    padding: '1em'
  },
  taskDate:{
    padding: '1em'
  },
  taskAssignment: {
    padding: '1em'
  }
})

export default (handler)=>{
  let cs = stylesheet[handler];
  return css(cs)
}
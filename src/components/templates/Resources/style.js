import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  resourceContainer: {
    boxSizing: 'border-box',
    width: '49%',
    display: 'inline-block',
    padding: '1em'
  },
  resource: {
    backgroundColor: '#323a45',
    borderRadius: '8px 0px 8px 0px',
    overflow: 'hidden',
    display: 'block'
  },
  resourceTitle: {
    padding: '1em',
    fontWeight: 400,
    color: '#abcbf1',
    fontSize: '1.2em',
    backgroundColor: '#2c333e',
    textAlign: 'center',
    position: 'relative'
  },
  resourceDescription:{
    padding: '1em'
  },
  resourceAssignment: {
    padding: '1em'
  },
  icon:{
    position: 'absolute',
    top: '.5em',
    left: '1em',
    fontSize: '1.5em',
    marginRight: '1em'
  }
})

export default (handler)=>{
  let cs = stylesheet[handler];
  return css(cs)
}
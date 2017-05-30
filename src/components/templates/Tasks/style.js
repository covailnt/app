import {StyleSheet, css} from 'aphrodite'

const type = ()=>({
  position: 'absolute',
  fontFamily: 'Lato',
  width: '2.3em',
  height: '2.3em',
  lineHeight: '2.3em',
  color: '#3d372a',
  fontWeight: 800,
  textAlign: 'center',
  display: 'inline-block',
  borderRadius: '8px',
  left: '.6em',
  top: '6.5em'
})

const stylesheet = StyleSheet.create({
  taskContainer: {
    boxSizing: 'border-box',
    width: '49%',
    display: 'inline-block'
  },
  task: {
    position: 'relative',
    margin: '1em',
    backgroundColor: '#2c333e',
    borderRadius: '8px 0px 8px 0px',
    overflow: 'hidden',
    display: 'block'
  },
  taskTitle: {
    padding: '1em',
    whiteSpace: 'nowrap',
    fontWeight: 600,
    color: '#e2effe',
    position: 'relative',
    textOverflow: 'ellipsis',
   // backgroundColor: '#323a45',
    paddingLeft: '1em'
  },
  taskPoints: {
    position: 'absolute',
    fontFamily: 'Lato',
    width: '2.3em',
    height: '2.3em',
    lineHeight: '2.3em',
    color: '#3d372a',
    fontWeight: 800,
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: '8px',
    backgroundColor: '#fdbe41',
    left: '.6em',
    top: '3.9em'
  },
  taskDescription:{
    margin: '1em',
    height: '2.5em',
    lineHeight: '1.25em',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  taskDate:{
    padding: '1em'
  },
  taskAssignment: {
    fontFamily: 'Lato',
    width: '3.5em',
    height: '3em',
    lineHeight: '3em',
    color: '#e2effe',
    fontWeight: 600,
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: '8px 0px 8px 0px',
    backgroundColor: '#4a90e2',
    position: 'absolute',
    left: '0px',
    top: '0px'
  },
  taskTypeBug: Object.assign({}, type(), {
    backgroundColor: '#fc625d'
  }),
  taskTypeFeature: Object.assign({}, type(), {
    backgroundColor: '#91d66e'
  }),
  container:{
    marginLeft: '3.5em',
    position: 'relative',
    backgroundColor: '#323a45'
  },
  status:{
    textAlign: 'center',
    backgroundColor: '#91d66e',
    position: 'absolute',
    width: '3.5em',
    height: '3em',
    lineHeight: '3em',
    right: '0px',
    top: '0px',
    borderRadius: '8px 0px 8px 8px'
  },
  timer: {
    marginLeft: '1em',
    paddingBottom: '1em'
  },
  stop:{
    color: '#fc625d'
  },
  record: {
    color: '#91d66e'
  }
})

export default (handler)=>{
  let cs = stylesheet[handler];
  return css(cs)
}
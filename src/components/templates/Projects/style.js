import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  project: {
    cursor: 'pointer',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '5px',
    margin: '1em 0px',
    backgroundColor: '#2c333e',
    fontSize: '1.5em',
    textTransform: 'capitalize',
    padding: '.5em'
  },
  name:{
    
  },
  projectName: {
    fontSize: '2em',
    position: 'relative',
    textAlign: 'center',
    width: '100%'
  },
  projectDescription: {
    
  },
  projectsContainer:{
    width: '20em',
    position: 'absolute',
    display: 'inline-block'
  },
  projectContainer:{
    marginTop: '2em',
    paddingLeft: '23em',
    width: '100%',
    boxSizing: 'border-box',
    display: 'inline-block',
    position: 'relative'
  },
  description: {
    backgroundColor: '#323a45'
  }
})

export default (handler, handler2)=>{
  let cs = stylesheet[handler];
  if(handler2){
    cs = cs[handler2]
  }
  return css(cs)
}
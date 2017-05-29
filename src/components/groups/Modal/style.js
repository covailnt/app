import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  modal: {
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    position: 'fixed',
    backgroundColor: 'rgba(0,5,9,.7)',
    textAlign: 'center',
    zIndex: 10000
  },
  modalClose:{
    position: 'absolute',
    right: '10px',
    top: '10px'
  },
  modalTitle:{
    fontSize: '1.6em',
    marginBottom: '1em'
  },
  modalContent:{
    position: 'relative',
    borderRadius: '6px',
    display: 'inline-block',
    backgroundColor: '#323a45',
    margin: '0px auto',
    marginTop: '100px',
    textAlign: 'left',
    padding: '1em',
    minWidth: '600px'
  }
})

export default (handler)=>(
  css(
    stylesheet[handler]
  )
)
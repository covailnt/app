import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  container:{
    padding: '1em'
  }
})

export default (handler, handler2)=>{
  let cs = stylesheet[handler];

  return css(cs)
}
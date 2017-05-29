let sessionState = [];
try{
  sessionState = JSON.parse(sessionStorage.getItem('CURRENT_PROJECT'))
}catch(error){

}
function currentProject(state = sessionState, action) {
  switch (action.type) {
    case 'SET_CURRENT_PROJECT':
      state =  {...action.value}
      setTimeout(()=>{
        try{
          sessionStorage.setItem('CURRENT_PROJECT', JSON.stringify(state))
        }catch(error){

        }
      }, 0)
      return state;
    default:
      return state
  }
}

export default currentProject;
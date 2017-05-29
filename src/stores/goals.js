function goals(state = [], action) {
  switch (action.type) {
    case 'SET_GOALS':
      return action.value.map((goal)=>( Object.assign({}, goal)))
    default:
      return state
  }
}


export default goals;
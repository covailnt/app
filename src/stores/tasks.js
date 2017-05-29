function tasks(state = [], action) {
  switch (action.type) {
    case 'SET_TASKS':
      return action.value.map((tasks)=> Object.assign({}, tasks))
    default:
      return state
  }
}


export default tasks;
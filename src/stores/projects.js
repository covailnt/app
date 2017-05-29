function projects(state = [], action) {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.value.map((project)=> Object.assign({}, project))
    default:
      return state
  }
}

export default projects;
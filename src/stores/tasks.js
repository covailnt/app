function tasks(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          name: action.name,
          description: action.description
        }
      ]
    default:
      return state
  }
}


export default tasks;
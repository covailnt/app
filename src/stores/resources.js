function resources(state = [], action) {
  switch (action.type) {
    case 'ADD_RESOURCES':
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

export default resources;
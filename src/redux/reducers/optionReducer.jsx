const initialState = ""

const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTIONS':
      return action.payload
      
    default:
      return state;
  }
}
export default optionReducer;
const initialState = ""

const priorityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRIORITY":
      return action.payload;
    default:
      return state;
  }
}
export default priorityReducer;
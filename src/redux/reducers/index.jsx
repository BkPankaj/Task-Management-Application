import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import queryReducer from "./queryReducer";
import optionReducer from "./optionReducer";
import priorityReducer from "./priorityReducer";

const rootReducer = combineReducers({
  tasksReducer,
  queryReducer,
  optionReducer,
  priorityReducer,
});

export default rootReducer;
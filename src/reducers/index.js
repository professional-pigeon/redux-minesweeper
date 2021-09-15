import mineStateReducer from "./mine-state-reducer";
import displayStateReducer from "./display-state-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  boardState: mineStateReducer,
  displayState: displayStateReducer
})

export default rootReducer
import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/foundMusic/childrenPages/recommend/store";

export default combineReducers({
  recommendReducer
})

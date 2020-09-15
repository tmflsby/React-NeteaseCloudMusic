import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "@/pages/discover/childrenPages/recommend/store";

export default combineReducers({
  recommendReducer
})

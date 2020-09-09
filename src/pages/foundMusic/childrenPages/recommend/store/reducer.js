import { Map } from "immutable";
import * as actionTypes from "./actionTypes";

const initState = Map({
  bannersList: []
})

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BANNER_LIST_SUCCESS:
      return state.set("bannersList", [])
    default:
      return state
  }
}

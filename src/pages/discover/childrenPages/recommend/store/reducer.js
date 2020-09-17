import { Map } from "immutable";
import * as actionTypes from "./actionTypes";

const initState = Map({
  bannersList: [],
  personalizedList: []
})

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BANNER_LIST_SUCCESS:
      return state.set("bannersList", action.payload.data)
    case actionTypes.PERSONALIZED_TYPE_SUCCESS:
      return state.set("personalizedList", action.payload)
    default:
      return state
  }
}

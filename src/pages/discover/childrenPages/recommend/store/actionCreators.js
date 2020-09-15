import { fetchBannerListApi } from "@/api/recommend";
import * as actionTypes from "./actionTypes";

export const changeBannerListAction = (data) => ({
  type: actionTypes.FETCH_BANNER_LIST_SUCCESS,
  payload: { data }
})

export const getBannerListAsyncAction = () => (dispatch) => {
  fetchBannerListApi().then(res => {
    if (res.code === 200) {
      dispatch(changeBannerListAction(res.banners))
    }
  }).catch(error => {
    console.log(error)
  })
}

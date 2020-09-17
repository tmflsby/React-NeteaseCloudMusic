import { fetchBannerListApi, fetchPersonalizedApi } from "@/api/recommend";
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

export const changePersonalizedAction = (data) => ({
  type: actionTypes.PERSONALIZED_TYPE_SUCCESS,
  payload: data
})

export const fetchPersonalizedAsyncAction = () => (dispatch) => {
  fetchPersonalizedApi().then(res => {
    if (res.code === 200) {
      dispatch(changePersonalizedAction(res.result.splice(0, 8)))
    }
  }).catch(error => {
    console.log(error)
  })
}

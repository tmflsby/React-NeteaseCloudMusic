import { fetchBannerListApi } from "@/api/recommend";

export const getBannerListAsyncAction = () => () => {
  fetchBannerListApi().then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
}

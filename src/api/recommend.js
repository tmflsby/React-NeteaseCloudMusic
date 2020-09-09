import request from "../services/request";

export const fetchBannerListApi = () => request({
  url: "/banner"
})

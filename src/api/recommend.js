import { get } from "@/utils/request";

export const fetchBannerListApi = () => get("/banner")

export const fetchPersonalizedApi = () => get("/personalized")

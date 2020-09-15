import request from "../utils/request";

export const fetchList = (query) => request({
  url: "api/todos",
  method: "get",
  params: query
})

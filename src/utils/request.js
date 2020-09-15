import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: Number(process.env.REACT_APP_TIME_OUT)
})

// Add a request interceptor 全局请求拦截，发送请求之前执行
instance.interceptors.request.use(
  config => {
    // Do something before request is sent
    // 设置请求的 token 等等
    // config.headers["authorization"] = "Bearer " + getToken();
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Add a response interceptor 请求返回之后执行
instance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

/**
 * get 请求
 * @param { * } url 请求地址
 * @param { * } params
 * */
export const get = (url, params) => instance.get(url, { params })

/**
 * post 请求
 * @param { * } url 请求地址
 * @param { * } data
 * */
export const post = (url, data) => instance.post(url, data)

/**
 * put 请求
 * @param { * } url 请求地址
 * @param { * } data
 * */
export const put = (url, data) => instance.put(url, data)

/**
 * delete 请求
 * @param { * } url
 * */
export const del = url => instance.delete(url)

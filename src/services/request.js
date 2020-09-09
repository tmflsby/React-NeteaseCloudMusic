import axios from "axios";

const request = (options) => {
  return new Promise((resolve, reject) => {
    // 1. 实例配置
    const insOptions = {
      baseURL: process.env.REACT_APP_BASE_URL,
      timeout: Number(process.env.REACT_APP_TIME_OUT)
    }

    // 2. 创建 axios 实例
    const axiosInstance = axios.create(insOptions)

    // 3. 请求拦截
    axiosInstance.interceptors.request.use(
      config => {
        // 3-1 页面添加loading组件
        // 3-2 token 鉴权
        // ……
        return config
      },
      error => {
        return error
      }
    )

    // 4. 响应拦截
    axiosInstance.interceptors.response.use(
      res => {
        return res.data
      },
      error => {
        // 错误码处理
        if (error && error.response) {}

        return error;
      }
    )

    // 5. 网络请求
    axiosInstance(options).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export default request

import axios from "axios";
// API请求地址
//axios.defaults.baseURL = process.env.API_ROOT
const IS_DEV = process.env.NODE_ENV !== "production";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// 请求超时
//axios.defaults.timeout = 5000

// 公共请求参数
const commonParam = {};

// 拦截请求
axios.interceptors.request.use(
  req => {
    return req;
  },
  err => {
    return err;
  }
);

// 拦截响应
axios.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return err;
  }
);

// post方法
export function post(url, data = {}) {
  let params = Object.assign(data, commonParam);
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(
      response => {
        resolve(response);
      },
      err => {
        reject(err);
      }
    );
  });
}

// get方法
export function get(url, data = {}) {
  let params = Object.assign(data, commonParam);
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(
      response => {
        resolve(response);
      },
      err => {
        reject(err);
      }
    );
  });
}

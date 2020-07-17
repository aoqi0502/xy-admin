import axios from 'axios';
import router from '../router/index';
import store from "../store";
import {Message} from 'element-ui'
axios.defaults.timeout = 10000;
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL



axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = store.state.common.TOKEN;
        if(token != '') {
            config.headers['token'] = token;
        }
        return config;
    },
    error => {
        return Promise.error(error);
    })

// axios 拦截器
axios.interceptors.response.use(
    response => {
        console.log(response)
        if (response.status === 200) {
            let code = response.data.code
            switch (code) {
                case 200:
                    return response.data
                case 400:
                    // 正常业务报错
                    Message({
                        showClose: true,
                        message: response.data.msg,
                        type: 'warning',
                        duration: 1500
                    })
                    return Promise.reject(response)
                case 401:
                    // 无权限
                    router.push('/login')
                    return Promise.reject(response)
                case 403:
                    // token过期
                    router.push('/login')
                    return Promise.reject(response)
                case 404:
                    return Promise.reject(response)
                case 500:
                    return Promise.reject(response)
            }
            return Promise.reject(response);
        } else {
            return Promise.reject(response);
        }
    },

    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            return Promise.reject(error.response);
        }
    }
)


export default axios

import Axios from "axios";
<<<<<<< HEAD
// Axios.defaults.baseURL="http://172.16.2.89:8080";
Axios.defaults.baseURL="http://localhost:7770";
=======
Axios.defaults.baseURL="http://localhost:2666";
>>>>>>> 822d3b82946c7d4060305adb109111fd578d4119

//请求拦截=========
Axios.interceptors.request.use(
    config=>{
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//响应拦截=========
Axios.interceptors.response.use(config=>{
    return config;
});
export default Axios;
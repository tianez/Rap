/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
import axios from "axios";
const CancelToken = axios.CancelToken;

axios.defaults.timeout = 10000;
axios.defaults.dataType = "json";
/**
 * 请求拦截器
 *
 */
let instance = axios.create();
instance.interceptors.request.use(config => {
    if (config.url.indexOf("https://") != 0 && config.url.indexOf("http://") != 0) {
        config.url = AppConfig.ApiUrl + config.url;
        // config.url = AppConfig.YapiUrl + config.url;
    }
    config.cancelToken = new CancelToken(c => {
        // executor 函数接收一个 cancel 函数作为参数
        window.axiosCancel = c;
    });
    config.params = {
        timestamp: Date.parse(new Date()),
        orgId: localStorage.orgId,
        orgid: localStorage.orgId,
        ...config.params
    };
    config.headers = {
        // orgid: "2f48b9f151cf4f48b01030624cd7aac7",
        userId: localStorage.userId,
        ...config.headers
    };
    return config;
});

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        let data = {
            success: true,
            message: response.data.msg,
            ...response.data
        };
        return data;
    },
    error => {
        // 对响应错误做点什么
        let res = {};
        if (error.response) {
            let err = error.response;
            let data = isJson(err.data) ? err.data : {};
            res = {
                message: data.message || data.msg || err.statusText,
                status: err.status,
                ...data
            };
        } else if (error.request) {
            res.message = "网络错误，请检查你的网络状态";
        } else {
            console.log("Error", error.message);
        }
        if (res.status == 401) {
            localStorage.removeItem("authorization");
            store.dispatch("user/init", {});
        }
        res.success = false;
        console.log(res);
        return res;
    }
);

export default instance;

//判断obj是否为json对象
function isJson(obj) {
    var isjson =
        typeof obj == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}

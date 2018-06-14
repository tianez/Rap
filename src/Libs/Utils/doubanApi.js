/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
import axios from "axios";
/**
 * 请求拦截器
 *
 */
let doubanApi = axios.create({
    baseURL: AppConfig.doubanUrl,
    timeout: 5000,
    dataType: "json"
});

/**
 * 响应拦截器
 */
doubanApi.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        let data = {
            success: true,
            data: response.data
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

export default doubanApi;

//判断obj是否为json对象
function isJson(obj) {
    var isjson =
        typeof obj == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}

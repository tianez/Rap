/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
import axios from "axios";
// import SHA1 from "./SHA1";

let AppId = "A6065581285444";
let AppKey = "7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0";
let AppUrl = "https://d.apicloud.com/mcm/api/";

axios.defaults.timeout = 10000;
axios.defaults.dataType = "json";
/**
 * 请求拦截器
 *
 */
let apicloud = axios.create();
apicloud.interceptors.request.use(config => {
    config.url = AppUrl + config.url;
    let now = Date.now();
    let key = SHA1(AppId + "UZ" + AppKey + "UZ" + now) + "." + now;
    config.headers = {
        ...config.headers,
        authorization: localStorage.authorization || "",
        "X-APICloud-AppId": AppId,
        "X-APICloud-AppKey": key
    };
    if (config.params && config.params.filter) {
        config.params = {
            ...config.params,
            filter: JSON.stringify(config.params.filter)
        };
    }
    return config;
});

export default apicloud;

const messages = {
    "The mailbox is not verified": "邮箱地址未验证",
    "username:already exists": "用户名已存在"
};

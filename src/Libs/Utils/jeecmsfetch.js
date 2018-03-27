import axios from "axios";
import qs from "qs";
import { getRand } from "./random";
import { signParams } from "./sign";

let jeecmsfetch = axios.create({
    baseURL: AppConfig.baseUrl
});
jeecmsfetch.defaults.timeout = 15000;
/**
 * 请求拦截器
 *
 */
jeecmsfetch.interceptors.request.use(
    config => {
        //在此处统一配置公共参数
        let appId = AppConf.appId; //appid
        let appKey = AppConf.appKey; //appkey
        let sessionKey = localStorage.getItem("sessionKey"); //sessionkey
        let _site_id = localStorage.getItem("_site_id") || ""; //站点id
        let params = {
            appId: appId, //appid
            nonce_str: getRand(), //随机数
            _site_id_param: _site_id
        };
        if (sessionKey && sessionKey != "") {
            params.sessionKey = sessionKey;
        }
        for (let key in config.data) {
            params[key] = config.data[key]; //添加进参数列表
        }
        config.method = "post";
        params = signParams(params, appKey); //返回签名后的对象
        config.data = qs.stringify(params); //序列化
        return config;
    },
    error => {
        Promise.reject(error); // 错误提示
    }
);

/**响应拦截器 */
jeecmsfetch.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default jeecmsfetch;

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
import axios from 'axios'
import toast from 'Components/toast/action';

let AppId = 'A6065581285444'
let AppKey = 'E9BE0554-7BFB-0317-E926-64D8D8A45784'
let AppUrl = 'https://d.apicloud.com/mcm/api/'

export default async function request(url, options = {}) {
    // if (options.data) {
    //     let formdata = new FormData();
    //     for (let i in options.data) {
    //         formdata.append(i, options.data[i]);
    //     }
    //     options.data = formdata
    // }
    if (options.params && options.params.filter) {
        options.params.filter = JSON.stringify(options.params.filter)
    }
    let now = Date.now()
    let key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now
    return axios({
        url: AppUrl + url,
        timeout: 10000,
        dataType: 'json',
        headers: {
            authorization: localStorage.authorization,
            'X-APICloud-AppId': AppId,
            'X-APICloud-AppKey': key,
        },
        // params: {
        //     ID: 12345
        // },
        // data: {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        // }
        ...options
    }).then(({ data }) => ({ data, success: true })).then(catToken).catch(catchErr);
}

const catToken = async response => {
    if (response.data.error) {
        let error = response.data.error
        let res = {
            success: false,
            data: {
                ...error,
            },
            message: messages[error.message] || error.message
        }
        return res
    }
    return response
}

async function catchErr(error) {
    let res = {}
    if (error.response) {
        let err = error.response
        let data = isJson(err.data) ? err.data : {}
        res = {
            success: false,
            data: {
                status: err.status,
                statusText: err.statusText,
                message: err.statusText,
            },
            ...data.error
        }
    } else if (error.request) {
        // console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    if (res.message) {
        res.message = messages[res.message] || res.message
    }
    toast(res.message)
    return res
}

//判断obj是否为json对象  
function isJson(obj) {
    var isjson = typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}

const messages = {
    'The mailbox is not verified': '邮箱地址未验证',
    'username:already exists': '用户名已存在',
}
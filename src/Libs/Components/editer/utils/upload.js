'use strict'

const ajaxUpload = require('../../utils/AjaxUpload')
const {
    getUpToken,
    getHash
} = require('../../utils/Qiniu')

let uploadFile = function(props) {
    let {
        files,
        id,
        type,
        onload
    } = props
    let qnurl = 'http://7xj11y.com1.z0.glb.clouddn.com'
    let token = getUpToken()
    let file = files[id]
    return ajaxUpload({
        url: 'http://up.qiniu.com',
        name: 'file',
        key: file.name,
        token: token,
        file: file,
        onProgress: (e) => {
            // console.log((e.loaded / e.total) * 100 + '%')
        },
        onLoad: (e) => {
            let res = JSON.parse(e.currentTarget.responseText)
            onload(res, type)
        },
        onError: () => {}
    })
}

module.exports = uploadFile

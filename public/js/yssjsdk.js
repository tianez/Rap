var u = navigator.userAgent;
var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var bd = window.bd;
var YSSJ = {
    isApp: bd ? true : false
};
if (isAndroid && bd) {
    YSSJ = {
        isApp: bd ? true : false,
        getauth: function(data, key) {
            //获取签名
            return JSON.parse(bd.bdInterFaceMethod(JSON.stringify(data || {}), 10018));
        },
        user: function() {
            // 获取当前用户
            var user = bd.bdInterFaceMethod(JSON.stringify({}), 10010);
            if (user) {
                return JSON.parse(user);
            }
            return null;
        },
        login: function() {
            // 调取登录
            return JSON.parse(bd.bdInterFaceMethod(JSON.stringify({}), 10012));
        },
        siteid: function() {
            // 获取当前站点id
            return JSON.parse(bd.bdInterFaceMethod(JSON.stringify({}), 10016));
        },
        openUrl: function(data) {
            // 在新窗口打开链接
            return JSON.parse(bd.bdInterFaceMethod(JSON.stringify(data || {}), 10015));
        },
        getMap: function(data) {
            // 获取坐标
            return bd.bdInterFaceMethod(JSON.stringify(data || {}), 10019);
        },
        getMapNew: function(data) {
            // 获取坐标
            return bd.bdInterFaceMethod(JSON.stringify(data || {}), 10025);
        },
        setting: function(data) {
            // 获取设置接口
            return JSON.parse(bd.bdInterFaceMethod(JSON.stringify(data || {}), 10020));
        },
        close: function(data) {
            // 关闭浏览器
            return JSON.parse(bd.bdInterFaceMethod(JSON.stringify(data || {}), 10022));
        },
        fullscreen: function(data) {
            // 浏览器全屏
            return JSON.parse(bd.bdInterFaceMethod(JSON.stringify(data || {}), 10023));
        }
    };
}

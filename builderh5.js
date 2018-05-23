function plusReady() {
    // 隐藏滚动条
    plus.webview.currentWebview().setStyle({ scrollIndicator: "none" });
    // Android处理返回键
    plus.key.addEventListener("backbutton", BackButton, false);
}
if (window.plus) {
    plusReady();
} else {
    document.addEventListener("plusready", plusReady, false);
}

function BackButton() {
    if (window.location.hash != "#/home") {
        return window.history.back();
    }
    if (plus.os.name != "iOS") {
        return confirm("确认退出？") && plus.runtime.quit();
    }
    plus.nativeUI.confirm(
        "确认退出？",
        function(e) {
            if (e.index > 0) {
                plus.runtime.quit();
            }
        },
        "HelloH5",
        ["取消", "确定"]
    );
}

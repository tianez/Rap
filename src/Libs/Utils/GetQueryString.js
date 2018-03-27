export default function GetQueryString(url, name) {
    let urls = url.split("?")
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    // var r = url.substr(1).match(reg);
    var r = urls[1] ? urls[1].match(reg) : null
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

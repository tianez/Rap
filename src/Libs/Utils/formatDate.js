/**
 * @param {int} timestamp 要格式化的时间戳 默认为当前时间
 * @return {string}   格式化的时间对象
 */
const formatDate = timestamp => {
    let _ = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
    let jsdate = new Date();
    if (timestamp) {
        if (timestamp.length == 10) {
            timestamp = timestamp * 1000;
        }
        jsdate = new Date(timestamp);
    }
    let year = jsdate.getFullYear();
    let month = jsdate.getMonth() + 1;
    let day = jsdate.getDate();
    let hour = jsdate.getHours();
    let minute = jsdate.getMinutes();
    let second = jsdate.getSeconds();
    let res = {
        year: year.toString(),
        month: _[month] || month.toString(),
        day: _[day] || day.toString(),
        hour: _[hour] || hour.toString(),
        minute: _[minute] || minute.toString(),
        second: _[second] || second.toString()
    };
    let ymd = res.year + "-" + res.month + "-" + res.day;
    let fulldate = ymd + " " + res.hour + ":" + res.minute + ":" + res.second;
    return {
        ...res,
        ymd,
        fulldate,
        timestamp: jsdate.getTime()
    };
};

export default formatDate;

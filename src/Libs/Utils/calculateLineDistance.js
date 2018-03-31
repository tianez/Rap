/**
 * 通过经纬度计算两地距离
 * @param {坐标经纬度1} start 
 * @param {坐标经纬度2} end 
 */
const calculateLineDistance = (start, end) => {
    var d1 = 0.01745329251994329;
    var d2 = start.longitude;
    var d3 = start.latitude;
    var d4 = end.longitude;
    var d5 = end.latitude;
    d2 *= d1;
    d3 *= d1;
    d4 *= d1;
    d5 *= d1;
    var d6 = Math.sin(d2);
    var d7 = Math.sin(d3);
    var d8 = Math.cos(d2);
    var d9 = Math.cos(d3);
    var d10 = Math.sin(d4);
    var d11 = Math.sin(d5);
    var d12 = Math.cos(d4);
    var d13 = Math.cos(d5);
    var arrayOfDouble1 = [];
    var arrayOfDouble2 = [];
    arrayOfDouble1.push(d9 * d8);
    arrayOfDouble1.push(d9 * d6);
    arrayOfDouble1.push(d7);
    arrayOfDouble2.push(d13 * d12);
    arrayOfDouble2.push(d13 * d10);
    arrayOfDouble2.push(d11);
    var d14 = Math.sqrt((arrayOfDouble1[0] - arrayOfDouble2[0]) * (arrayOfDouble1[0] - arrayOfDouble2[0]) +
        (arrayOfDouble1[1] - arrayOfDouble2[1]) * (arrayOfDouble1[1] - arrayOfDouble2[1]) +
        (arrayOfDouble1[2] - arrayOfDouble2[2]) * (arrayOfDouble1[2] - arrayOfDouble2[2]));

    return (Math.asin(d14 / 2.0) * 12742001.579854401);
}

export default calculateLineDistance
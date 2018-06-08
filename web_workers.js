console.log(111);
postMessage(23);
fetch("https://api.douban.com/v2/movie/in_theaters", { mode: "cors" }).then(res => {
    console.log(res);
});

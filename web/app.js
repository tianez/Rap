const Koa = require("koa");
const app = new Koa();
const axios = require("axios");
//静态文件
const serve = require("koa-static2");
app.use(serve("/", __dirname + "/static"));
const view = require("koa-view");
app.use(
    view(__dirname + "/views", {
        noCache: true
    })
);

const Router = require("koa-router")();

Router.get("/", async (ctx, next) => {
    ctx.state = {
        title: "app"
    };
    await ctx.render("test", { user: "Coder" });
});

Router.get("/webrtc", async (ctx, next) => {
    ctx.state = {
        title: "app"
    };
    await ctx.render("webrtc", { user: "Coder" });
});
Router.get("/webrtcsend", async (ctx, next) => {
    ctx.state = {
        title: "app"
    };
    await ctx.render("webrtcsend", { user: "Coder" });
});
Router.get("/home", async (ctx, next) => {
    ctx.state = {
        title: "app"
    };
    await ctx.render("home", { user: "Coder" });
});

Router.get("/home/*", async (ctx, next) => {
    ctx.state = {
        title: "app"
    };
    await ctx.render("home", { user: "Coder" });
});

Router.get("/v2/*", async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    // ctx.set("Access-Control-Allow-Headers", "x-requested-with,content-type,x-file-name,authorization");
    // ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    ctx.set("Cache-Control", "no-cache");
    ctx.set("Pragma", "no-cache");
    console.log(ctx.url);
    console.log("https://api.douban.com" + ctx.url);
    let res = await axios("https://api.douban.com" + ctx.url);
    ctx.body = res.data;
    // await ctx.render("home", { user: "Coder" });
});

app.use(Router.middleware());

let port = 3004;
const server = app.listen(port, function() {
    console.log("Koa is listening to http://localhost:" + port);
});

const sockets = require("socket.io").listen(server, {
    timeout: 300000,
    reconnection: true,
    reconnectionDelayMax: 30000,
    reconnectionDelay: 1000
});

var onlineCount = 0;
let candidates = {};
sockets.on("connection", async function(socket) {
    onlineCount++;
    console.log("有人上线了，当前在线人数:" + onlineCount);
    // socket.emit("login", { ok: true });
    socket.broadcast.emit("broadcast", { onlineCount });
    // sockets.sockets.emit("chat", { ok: true, onlineCount });
    socket.on("disconnect", function() {
        onlineCount--;
        console.log("有人下线，当前在线人数：" + onlineCount);
    });
    socket.on("offer", function(data) {
        console.log(data);
        socket.broadcast.emit("offer", data);
    });
    socket.on("candidate", function(candidate) {
        console.log(candidate);
        socket.broadcast.emit("sendcandidate", candidate);
    });
});

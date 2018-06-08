const Koa = require("koa");
const app = new Koa();
const axios = require("axios");
//静态文件
const serve = require("koa-static2");
app.use(serve("/", __dirname + "/static"));
const view = require("koa-view");
app.use(view(__dirname + "/views"));

const Router = require("koa-router")();

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

let port = 3001;
const server = app.listen(port, function() {
    console.log("Koa is listening to http://localhost:" + port);
});

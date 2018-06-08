const Koa = require("koa");
const app = new Koa();

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

Router.get("/api", async (ctx, next) => {
    ctx.state = {
        title: "app"
    };
    ctx.body = { id: 1111 }
    // await ctx.render("home", { user: "Coder" });
});

app.use(Router.middleware());

let port = 3001;
const server = app.listen(port, function () {
    console.log("Koa is listening to http://localhost:" + port);
});

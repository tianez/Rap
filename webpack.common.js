const fs = require("fs");
const path = require("path");
const lessToJs = require("less-vars-to-js");
const paletteLess = fs.readFileSync("./theme.less", "utf8");
const theme = lessToJs(paletteLess);
module.exports = {
    entry: {
        app: "./src/app"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
        axios: "axios"
    },
    resolve: {
        extensions: [".ts", ".js", ".jsx", ".web.js", "json", ".react.js"],
        alias: {
            Libs: path.resolve(__dirname, "src/Libs/"),
            Hoc: path.resolve(__dirname, "src/Libs/Hoc/"),
            Components: path.resolve(__dirname, "src/Libs/Components/"),
            Extended: path.resolve(__dirname, "src/Libs/Extended/"),
            Utils: path.resolve(__dirname, "src/Libs/Utils/"),
            Views: path.resolve(__dirname, "src/Libs/Views/")
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[name]_[local]_[hash:base64:5]"
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    "postcss-loader",
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                            // modifyVars: theme
                        }
                    }
                ]
            },
            { test: /\.ts$/, use: ["ts-loader"] },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(svg)$/i,
                loader: "svg-sprite-loader",
                include: [
                    // require.resolve("antd").replace(/warn\.js$/, ""), // antd-mobile 内置svg
                    require.resolve("antd-mobile").replace(/warn\.js$/, "") // antd-mobile 内置svg
                    // path.resolve(__dirname, 'public/svg'),  // 业务代码本地私有 svg 存放目录
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "images/[name]-[hash:8].[ext]"
                }
            }
        ]
    }
};

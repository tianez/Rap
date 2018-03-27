const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.js");
module.exports = merge(common, {
    devtool: "inline-source-map",
    mode: "development",
    devServer: {
        contentBase: "./",
        port: 3116,
        compress: true,
        host: "0.0.0.0",
        disableHostCheck: true,
        hot: true,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.dev.html"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
            manifest: require("./dll/vendor-manifest.json")
        })
    ]
});

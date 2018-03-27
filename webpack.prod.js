const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const common = require("./webpack.common.js");
module.exports = merge(common, {
    // devtool: "source-map",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist/Rap/dist"),
        filename: "[name]-[chunkhash].js"
        // publicPath: './',
        // publicPath: "http://imgfile.estv.com.cn/yssjcms/dist/"
        // sourceMapFilename: "[name].map"
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new CleanWebpackPlugin(["dist/Rap/dist"]),
        new HtmlWebpackPlugin({
            filename: "../index2.html",
            template: "./public/index.prod.html"
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DllReferencePlugin({
            manifest: require("./dll/vendor-manifest.json")
        }),
        new UglifyJSPlugin({
            // sourceMap: true
        }),
        new BundleAnalyzerPlugin()
    ]
});

var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: {
        vendor: ["seamless-immutable", "react-router-dom", "styled-components", "qs"]
    },
    output: {
        path: path.join(__dirname, "dll"),
        // filename: "[name].dll.[hash:8].js",
        filename: "[name].dll.js",
        library: "[name]_library"
        //Combine this plugins with output.library option to expose the dll function i. e. into the global scope.
    },
    //output file is in dist/dll folder
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve("./dll", "[name]-manifest.json"),
            name: "[name]_library"
        })
    ],
    resolve: {
        // root: path.resolve(__dirname, "client"),
        // modulesDirectories: ["node_modules"]
        // webpack2 use modules to replace all this configurations
        modules: ["node_modules", path.resolve(__dirname, "client")]
    }
};

const CopyWebpackPlugin = require("copy-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const path = require("path");

module.exports = {
    entry: "./bootstrap.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bootstrap.js",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    mode: "development",
    plugins: [new CopyWebpackPlugin(["index.html"]), new ErrorOverlayPlugin()],
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        open: true,
        clientLogLevel: "silent",
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};

const path = require("path");

const prod = process.argv.indexOf("-p") !== -1;
const devServer = process.env.DEV_SERVER;

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./demo/index.html",
    filename: "index.html",
    inject: "body"
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: prod ? "react-wizard.min.css" : "react-wizard.css",
    disable: process.env.NODE_ENV === "development" || process.env.NODE_ENV === "testing"
});

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const BundleAnalyzerPluginConfig = new BundleAnalyzerPlugin({
    analyzerMode: "static"
});

let config = {
    entry: {
        app: devServer ? "./demo/index.js" : "./src/index.js"
    },
    output: {
        filename: prod ? "react-wizard.min.js" : "react-wizard.js",
        path: path.resolve(__dirname, "lib"),
        libraryTarget: "umd"
    },
    module: {
      loaders: [
          { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
          { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: { minimize: true }
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    }
};



let plugins = [ HtmlWebpackPluginConfig, extractSass, BundleAnalyzerPluginConfig ];

if (devServer) {
    config.plugins = plugins.splice(0, 2);
}

if (!devServer) {
    config.plugins = plugins;
    config.externals = {
        "react": "react",
        "prop-types": "prop-types"
    };
}

module.exports = config;






























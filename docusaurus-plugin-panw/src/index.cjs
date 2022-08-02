const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

// eslint-disable-next-line import/no-extraneous-dependencies, import/order
const webpack = require("webpack");

module.exports = function redocWebpack(context, options) {
  const isProd = process.env.NODE_ENV === "production";
  return {
    name: "docusaurus-plugin-webpack",
    getClientModules() {
      return [path.join(__dirname, "custom.css")];
    },
    configureWebpack() {
      return {
        resolve: {
          fallback: {
            fs: false,
          },
        },
        plugins: [
          new webpack.DefinePlugin({
            "process.versions.node": JSON.stringify(
              process.versions.node || "0.0.0"
            ),
          }),
          new NodePolyfillPlugin(),
        ],
      };
    },
    getThemePath() {
      return path.join(__dirname, "theme");
    },
  };
};

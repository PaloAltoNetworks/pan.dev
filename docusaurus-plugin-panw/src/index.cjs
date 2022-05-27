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
    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${options.gtm}');</script>
<!-- End Google Tag Manager -->`,
        ],
        postBodyTags: [
          `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${options.gtm}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`,
        ],
      };
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
  };
};

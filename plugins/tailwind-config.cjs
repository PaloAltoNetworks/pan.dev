function tailwindPlugin(context, options) {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [
        require("postcss-import"),
        require("@tailwindcss/postcss"),
        require("autoprefixer"),
      ];
      return postcssOptions;
    },
  };
}

module.exports = tailwindPlugin;

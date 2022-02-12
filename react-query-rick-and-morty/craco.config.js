const webpack = require("webpack");
const path = require("path");

module.exports = {
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve("dist");
      return webpackConfig; // Important: return the modified config
    },
  },
  plugins: [],
};

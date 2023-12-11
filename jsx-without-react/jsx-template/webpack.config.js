const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./dist/App.js",
  mode: "production",
  output: {
    path: `${__dirname}/build`,
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html"
  })]
};

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    functions: "./src/functions.js",
    dom: "./src/DOM.js",
    factories: "./src/factories.js"
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist"
  },
  output: {
    filename: "[name].main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
    ]
  }
};

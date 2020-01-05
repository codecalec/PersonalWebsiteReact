const path = require("path");
const fs = require("fs");
const SRC_DIR = path.join(__dirname, "/react-client/src");
const DIST_DIR = path.join(__dirname, "/react-client/dist");
const webpack = require("webpack");

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    sourceMapFilename: "bundle.map"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".pdf"]
  },
  externals: {
    mdsource:
      "'https://alexveltmanpersonalwebsite.s3.eu-west-2.amazonaws.com/markdown/resume.md'"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000&minetype=image/png"
      },
      {
        test: /\.jpg/,
        loader: "file-loader"
      },
      {
        test: /\.pdf/,
        loader: "file-loader"
      },
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", ["es2015", { modules: false }]],
          plugins: ["syntax-dynamic-import"]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  node: {
    fs: "empty"
  }
};

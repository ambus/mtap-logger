var path = require("path");
// const UglifyJs = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: "production",
  target: 'node',
  devtool: "source-map",
  entry: "./src/log.ts",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js", ".jsx", ".json"]
  },
//   plugins: [new UglifyJs()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  output: {
    filename: "mtap_logger.js",
    path: path.resolve(__dirname, "dist"),
    library: '[mtap_logger]',
    // libraryTarget: 'var',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};

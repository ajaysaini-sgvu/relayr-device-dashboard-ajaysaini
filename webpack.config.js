const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: ["react-hot-loader/patch", "./src/index.js"]
  },
  output: {
    publicPath: "/",
    filename: "js/[name].js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: "body"
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        API_URL: JSON.stringify(process.env.API_URL)
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  devtool: "source-map"
};

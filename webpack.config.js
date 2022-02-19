const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const { ProvidePlugin } = require("webpack");

/** @type {import('webpack').Configuration} */
module.exports = {
  // mode: process.env.NODE_ENV,
  mode: "development",
  entry: {
    index: "./src/index.tsx",
  },
  devtool: process.env.NODE_ENV === "production" ? false : "source-map",
  devServer: {
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2020",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ProvidePlugin({
      React: "react",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    usedExports: true,
    // minimizer:
    //   process.env.NODE_ENV === "production"
    //     ? [
    //         new ESBuildMinifyPlugin({
    //           target: "es2020",
    //         }),
    //       ]
    //     : [],
  },
};

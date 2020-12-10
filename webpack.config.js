const webpack = require("webpack")
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry:{
      app:"./assets/js/script.js",
      tickets:"./assets/js/tickets.js",
      events:"./assets/js/events.js",
      schedule: "./assets/js/schedule"
  },
  output: {
      filename: "[name].bundle.js",
      path: __dirname + "/dist",
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: "static", // the report outputs to an HTML file in the dist folder
  })
  ],
  mode: "development"
};
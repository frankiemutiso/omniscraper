const path = require("path")
const BundleTracker = require('webpack-bundle-tracker')
const TerserWebpackPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './static/omniscraper_frontend/bundles'),
    filename: '[name].js',
    chunkFilename: "[id]-[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: { loader: "url-loader" },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', 
      minSize: 0, 
      maxInitialRequests: 20, 
      maxAsyncRequests: 20,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey){
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `${cacheGroupKey}.${packageName.replace("@", "")}`;
          }
        },
        common: {
          minChunks: 2, 
          priority: -10
        }
      }
    }, 
    runtimeChunk: 'single'
  }
};

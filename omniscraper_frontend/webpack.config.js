const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (_env, argv) {
  const isProd = argv.mode === "production";
  const isDev = !isProd;

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./static/omniscraper_frontend/bundles"),
      filename: "[name].js",
      chunkFilename: "[id]-[chunkhash].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProd ? "production" : "development",
            },
          },
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve("file-loader"),
        },
        {
          test: /\.css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\module.css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
        { test: /\.worker\.js$/, loader: "worker-loader" },
      ],
    },
    plugins: [
      new BundleTracker({ filename: "./webpack-stats.json" }),
      isProd &&
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash:8].css",
          chunkFilename: "[name].[contenthash:8].chunk.css",
        }),
    ].filter(Boolean),
    optimization: {
      usedExports: true,
      splitChunks: {
        chunks: "all",
        minSize: 0,
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `${cacheGroupKey}.${packageName.replace("@", "")}`;
            },
          },
          common: {
            minChunks: 2,
            priority: -10,
          },
        },
      },
      runtimeChunk: "single",
    },
  };
};

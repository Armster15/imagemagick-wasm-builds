const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const {merge} = require("webpack-merge");

const IS_DEV = process.env.NODE_ENV === "development";


const base = {
  entry: path.resolve(__dirname, "./src/", "index.ts"),
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "./lib"),
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
    fallback: {
      fs: false,
      child_process: false,
      crypto: require.resolve("crypto-browserify"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  context: __dirname,
  target: IS_DEV ? "web" : "browserslist",
  mode: IS_DEV ? "development" : "production",
};

module.exports = [
  merge(base, {
    output: {
      filename: "imagemagick.umd.js",
      library: {
        name: "ImageMagick",
        type: "umd",
        umdNamedDefine: true  
      },
    }
  }),
  merge(base, {
    output: {
      filename: "imagemagick.esm.js",
      library: {
        type: "module"
      }
    },
    experiments: {
      outputModule: true,
    },
  })
]
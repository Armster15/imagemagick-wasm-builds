const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");

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
      assert: "assert",
      buffer: "buffer",
      console: "console-browserify",
      constants: "constants-browserify",
      crypto: "crypto-browserify",
      domain: "domain-browser",
      events: "events",
      http: "stream-http",
      https: "https-browserify",
      os: "os-browserify/browser",
      path: "path-browserify",
      punycode: "punycode",
      process: "process/browser",
      querystring: "querystring-es3",
      stream: "stream-browserify",
      _stream_duplex: "readable-stream/duplex",
      _stream_passthrough: "readable-stream/passthrough",
      _stream_readable: "readable-stream/readable",
      _stream_transform: "readable-stream/transform",
      _stream_writable: "readable-stream/writable",
      string_decoder: "string_decoder",
      sys: "util",
      timers: "timers-browserify",
      tty: "tty-browserify",
      url: "url",
      util: "util",
      vm: "vm-browserify",
      zlib: "browserify-zlib",
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
        umdNamedDefine: true,
      },
    },
  }),
  merge(base, {
    output: {
      filename: "imagemagick.esm.js",
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true,
    },
  }),
];

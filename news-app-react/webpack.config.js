const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");

module.exports = (env) => {
  const currentPath = path.join(__dirname);
  const prodPath = `${currentPath}/.env`;
  const devPath = `${prodPath}.${env.REACT_ENVIRONMENT}`;
  const finalPath = fs.existsSync(devPath) ? devPath : prodPath;

  const processEnv = dotenv.config({ path: finalPath }).parsed;

  const envVariables = Object.keys(processEnv).reduce((composedEnv, key) => {
    composedEnv[`process.env.${key}`] = JSON.stringify(processEnv[key]);

    return composedEnv;
  }, {});

  const publicUrl = processEnv.REACT_PUBLIC_URL || "/public";

  return {
    mode: processEnv.NODE_ENV === "dev" ? "development" : "production",
    entry: "./index.js",
    output: {
      filename: "app.bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          exclude: /node_modules/,
          loader: "file-loader"
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(envVariables),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: "./public/index.html" }),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
        PUBLIC_URL: publicUrl
      })
    ],
    devtool: processEnv.NODE_ENV === "dev" ? "eval-source-map" : "source-map",
    devServer: {
      historyApiFallback: true,
      open: true,
      port: 4000,
      stats: "minimal",
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  }
}

const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    popup: "./src/popup.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader",{
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                "tailwindcss",
                "autoprefixer",
              ],
              ident : "postcss",
            },
          },

        }],
      test : /\.css$/i,
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource'

      }
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: "./src/popup.html",
    filename: "popup.html",
  }),
    new CopyPlugin({
        patterns: [
            { from: 'public'},
        ],
    }),
    new webpack.DefinePlugin({
      REACT_APP_OPENAI_API_KEY: JSON.stringify('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'),
    })
],


};

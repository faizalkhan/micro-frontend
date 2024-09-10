const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 2000,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i, // For CSS files
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.svg$/, // For SVG files
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
       name : 'reactApp',
       filename: 'remoteEntry.js',
       exposes: {
        './App': './src/App',
       },
       shared: {'react': {singleton: true, eager: false}, "react-dom": {singleton: true, eager: false}},
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

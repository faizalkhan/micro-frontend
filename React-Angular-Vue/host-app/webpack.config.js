const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// module.exports = {
//   mode: "development",
//   devServer: 
//   {
//       port: 5000
//   },
//   entry: './src/index.js',
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'hostApp',
//       remotes: {
//         reactApp: 'reactApp@http://localhost:2000/remoteEntry.js',
//         angularApp: 'angularApp@http://localhost:4000/remoteEntry.js',
//        },
//     }),
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//     }),
//   ],
// };



module.exports = {
  mode: "development",
  devtool: 'source-map',
  devServer: {
    port: 5000,
    historyApiFallback: true,
    hot: true

  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        reactApp: 'reactApp@http://localhost:2000/remoteEntry.js',
        angularApp: 'angularApp@http://localhost:4000/remoteEntry.js',
      }      
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

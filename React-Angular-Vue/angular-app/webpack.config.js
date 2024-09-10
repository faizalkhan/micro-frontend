const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name : 'angularApp',
  filename: 'remoteEntry.js',
  exposes : {
    "./AngularComponent": "./src/app/app.component.ts",
    './AppModule': './src/app/app.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

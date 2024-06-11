const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './AppModule': './src/app/app.module.ts',
    './AppComponent': './src/app/app.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

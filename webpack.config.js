const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'shared',

  exposes: {
    './header': './src/app/header/header.component.ts',
    './footer': './src/app/footer/footer.component.ts',
    './service': './src/services/test.service.ts',
    './environment': './src/environments/environment.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

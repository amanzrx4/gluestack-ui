const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              alias: {
                // ['@universa11y/react-native-aria']: path.resolve(
                //   __dirname,
                //   '../react-native-aria/src'
                // ),
                ['@universa11y/floating-ui']: path.resolve(
                  __dirname,
                  '../floating-ui/src'
                ),
                // ['@universa11y/utils']: path.resolve(__dirname, '../utils/src'),
                // For development, we want to alias the library to the source
              },
            },
          ]
        : ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};

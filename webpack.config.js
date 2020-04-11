module.exports = {
// https://webpack.js.org/configuration/entry-context
  entry: [
    './src/index.js',
  ],
  // https://webpack.js.org/configuration/output
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: '[name].js',
  },
  // https://webpack.js.org/configuration/dev-server
  devServer: {
    contentBase: './dist',
    // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
    // writetodisk: true
  },
  // https://webpack.js.org/configuration/module
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
    ],
  },
  // https://webpack.js.org/configuration/resolve/
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    // https://imweb.io/topic/5b66dd601402769b60847149
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  },
};

// https://eslint.org/docs/user-guide/configuring
// .eslintrc

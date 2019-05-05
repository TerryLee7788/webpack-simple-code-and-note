module.exports = {
    // https://webpack.js.org/configuration/entry-context
    entry: [
        './src/index.js'
    ],
    // https://webpack.js.org/configuration/output
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    // https://webpack.js.org/configuration/dev-server
    devServer: {
        contentBase: './dist'
    },
    // https://webpack.js.org/configuration/module
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    // 'eslint-loader'
                ]
            },
        ]
    },
    // https://webpack.js.org/configuration/resolve/
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    }
};

// https://eslint.org/docs/user-guide/configuring
// .eslintrc

module.exports = (env = {}) => {
    return {
      entry: './src/index.js',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
      },
      // devtool: env.dev ? 'eval-' : '',
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
      output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'script.js'
      },
      devServer: {
        static: './dist'
      }
    };
  };
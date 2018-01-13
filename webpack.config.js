const path = require('path')

module.exports = {
  entry: {
    'js/bundle': './app/main/js/site.js',
  },
  output: {
    path: __dirname + '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'post',
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [
      path.resolve(__dirname, 'app/main/js/'),
      "node_modules"
    ],
    extensions: ['.js']
  },
}

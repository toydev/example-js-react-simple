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
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'app/main/js/'),
      "node_modules"
    ],
    extensions: ['.js']
  },
}

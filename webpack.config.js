const path = require('path')

module.exports = {
  entry: {
    'bundle': './app/main/js/site.js',
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
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
      path.resolve(__dirname, "node_modules"),
    ],
    extensions: ['.js']
  },
}

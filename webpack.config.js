var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'app') + '/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?/,
        include: path.resolve(__dirname) + '/app',
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react', 'stage-2']
        }
      }
    ]
  }
}

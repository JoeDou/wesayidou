var path = require('path')
var ROOT_PATH = path.resolve(__dirname)

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: path.resolve(ROOT_PATH, 'bundle.js')
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
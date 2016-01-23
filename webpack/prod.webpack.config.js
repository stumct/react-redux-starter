var webpack = require('webpack');
var path = require('path');

module.exports = {
  plugins: [
          new webpack.optimize.UglifyJsPlugin({
            minimize: true
          })
  ]
}

var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');

var dev_config = require('./webpack/dev.webpack.config.js');
var prod_config = require('./webpack/prod.webpack.config.js');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  node_modules_dir: path.resolve(__dirname, 'node_modules')
};

var base_config = {
  context: __dirname,
  entry: {
    javascript: PATHS.src + '/index.jsx',
    html: PATHS.src + '/index.html',
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.(js|jsx)$/,
        include: PATHS.src,
        loader: 'babel'
      }, {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
        include: PATHS.src
      },
      // CSS, LESS and SASS loaders for styles
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      //image loader - will inline images less than 8kb
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8096'
      },
      // font loaders - mainly added for bootstrap fonts
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
  new webpack.ProvidePlugin({
    "$": "jquery",
    "jQuery": "jquery"
  })
]

};



if (TARGET === 'start' || !TARGET) {
  module.exports = merge(base_config, dev_config);
}

if (TARGET === 'deploy') {
  module.exports = merge(base_config, prod_config);
}

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  node_modules_dir: path.resolve(__dirname, 'node_modules')
};

const common = {
  context: __dirname,
  entry: {
    javascript: PATHS.src + '/main.js',
    vendor: ['react', 'react-dom', 'jquery'], //not used currently, could be removed
    html: PATHS.src + '/index.html'
  },
  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
  },
  module: {
    loaders: [
      // Babel for JS and JSX transpiling
      {
        test: /\.(js|jsx)$/,
        exclude: [PATHS.node_modules_dir, PATHS.dist],
        loaders: ['babel-loader'],
      },
      // Path loaders to copy files to dist
      {
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
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    })
  ]
}



// Default configuration
if (TARGET === 'start' || !TARGET) {

  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',
      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      preLoaders: [
        // ESLint preloader for linting
        {
          test: /\.(js|jsx)$/,
          loaders: ['eslint'],
          include: PATHS.src
        }
      ],
    }
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
            new webpack.optimize.UglifyJsPlugin({
              minimize: true
            })
    ]
  });
}

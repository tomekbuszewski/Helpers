var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var path = require('path');

var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './sass')
]

module.exports = {
  entry: './babel/index.js',
  output: {
    path: 'js',
    filename: 'index.js'
  },
  sassLoader: {
    includePaths: path.resolve(__dirname, './sass')
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: 'Webpack',
      alwaysNotify: true
    }),
    new ExtractTextPlugin('../css/style.css'),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      browsers: [],
      server: { baseDir: [ './' ] }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },
  postcss: function () {
      return [
        precss,
        autoprefixer({ browsers: ['last 2 versions'] })
      ];
  }
};

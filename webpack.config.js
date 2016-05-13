var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './babel/index.js',
  output: {
    path: 'js',
    filename: 'index.js'
  },
  plugins: [
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
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap!sass?sourceMap'
        )
      }
    ]
  }
};

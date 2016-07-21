var path = require('path')
var webpack = require('webpack')

if (process.env.NODE_ENV !== 'production') {
  module.exports = {
    entry: './example/index.js',
    output: {
      path: path.resolve(__dirname, './example'),
      publicPath: '/',
      filename: 'build.js'
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules'),
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue'
        },
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.html$/,
          loader: 'vue-html'
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'url',
          query: {
            limit: 10000,
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'example'),
      historyApiFallback: true,
      noInfo: true
    },
    devtool: '#eval-source-map'
  }
} else {

  module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'tree.js',
      libraryTarget: 'umd',
      library: 'VueTree'
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue'
        },
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }
      ]
    },
    // http://vue-loader.vuejs.org/en/workflow/production.html
    devtool: '#source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin()
    ]
  }

}

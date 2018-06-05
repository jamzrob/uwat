const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
  	app:'./src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist/public',
      'dist/*.html'
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // Specify the common bundle's name.
    }),
    new ExtractTextPlugin('public/stylesheets/[name].css'),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      hash: true
    })
  ],
  output: {
    filename: 'public/javascript/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // change publicpath to "./" when serving without a server
  },
  module: {
     rules: [
       {
        test: /\.(styl|css)$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
          }
        ]
        })
       },
       {
  	    test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'public/images/[name].[ext]',
              publicPath: "/", // change publicpath to "./" when serving without a server
            }  
          }
        ]
       },
       { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
       }
     ]
   }
};
import webpack from "webpack";
import webpackLive from "webpack-livereload-plugin";
import htmlWebpackPlugin from "html-webpack-plugin";

export default{
  entry: './src/client/index.js',
  output: {
    path: '/',
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        use:'babel-loader',
        test:/\.js$/,
        exclude:/node_modules/
      },
      {
        use:['style-loader', 'css-loader'],
        test:/\.css$/
      },
      {
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader', options:{ sourceMap: true}
          },
          {
            loader:'sass-loader', options:{ sourceMap: true}
          }
        ],
        test:/\.scsss$/
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({ template: './src/client/index.html'}),
    new webpackLive()
  ]
}
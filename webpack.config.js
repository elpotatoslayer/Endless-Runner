const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    open: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpe?g$/i,
        use: [
          "url-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  },
  // plugins: [
  //   new CleanWebpackPlugin({
  //     root: path.resolve(__dirname, '../'),
  //   }),
  //   new webpack.DefinePlugin({
  //     CANVAS_RENDERER: JSON.stringify(true),
  //     WEBGL_RENDERER: JSON.stringify(true),
  //   }),
  //   new HtmlWebpackPlugin({
  //     template: './index.html',
  //   }),
  // ],
};

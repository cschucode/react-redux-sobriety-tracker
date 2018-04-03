const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
  module: {
    "rules": [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", },
          { loader: "sass-loader"},
        ]
      },
  ]
  },
  devServer: {
       contentBase: path.resolve(__dirname, "dist"),
   }
};

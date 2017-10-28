var path = require('path');

module.exports = {
  entry: {
  	app: path.resolve(__dirname, 'src/client/scripts/entry.jsx')
  },
  node: {
    fs: 'empty'
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ['react'] } }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
};

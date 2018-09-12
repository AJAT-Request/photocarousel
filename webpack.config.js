const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        queery: {
          presets: [
            'babel-preset-env', '@babel/preset-react', '@babel/preset-airbnb'
          ]
        }
      }
    ]
  },
  entry: './client//src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
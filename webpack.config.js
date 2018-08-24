var path = require('path');

module.exports = {
  entry: './dom.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  mode: "development"
};
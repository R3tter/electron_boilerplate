const path = require('path');

const main = {
  src: path.resolve(__dirname, '../src/renderer/'),
  build: path.resolve(__dirname, '../.tmp/'),
  dist: path.resolve(__dirname, '../dist/'),
  icons: path.resolve(__dirname, '../src/renderer/images/icons/')
};


module.exports = {
  main
};

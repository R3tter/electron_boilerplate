const path = require('path');

const main = {
  src: path.resolve(__dirname, '../src/'),
  build: path.resolve(__dirname, '../.tmp/'),
  dist: path.resolve(__dirname, '../dist/'),
  icons: path.resolve(__dirname, '../src/images/icons/')
};


module.exports = {
  main
};

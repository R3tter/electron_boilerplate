const path = require('path');

const main = {
  renderer: path.resolve(__dirname, '../src/renderer/'),
  main: path.resolve(__dirname, '../src/main/'),
  build: path.resolve(__dirname, '../dev/'),
  dist: path.resolve(__dirname, '../dist/'),
  icons: path.resolve(__dirname, '../src/renderer/images/icons/')
};

module.exports = {
  main
};

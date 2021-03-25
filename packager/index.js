const packager = require('electron-packager');
const path = require('path');
const { version } = require('../package.json');
const { dist, out } = require('../config/paths').main;

const baseConfig = {
  arch: ['x64', 'arm64', 'ia32'],
  buildVersion: version,
  dir: dist,
  out
};

const config = {
  mac: {
    platform: 'darwin',
    icon: path.resolve(__dirname, './icons/mac/icon.icns')
  },
  win: {
    platform: 'win32',
    icon: path.resolve(__dirname, './icons/win/icon.ico')
  },
  linux: {
    platform: 'linux',
    icon: path.resolve(__dirname, './icons/win/icon.png')
  }
};

packager({ ...baseConfig, ...config[process.env.plat] });

var pkg = require('./package.json');

Package.describe({
  name: 'sasstastical:sasstastical-free',
  version: pkg.version,
  documentation: './README.md',
  git: 'https://github.com/sasstasical/sasstastical-free.git'
});
Package.onUse(function(api) {
  api.versionFrom('1.8')
  api.addFiles([
    'dist/css/sasstasical-free.css'
  ], 'client');
});

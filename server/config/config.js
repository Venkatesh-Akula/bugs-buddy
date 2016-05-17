var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/bugs-buddy',
    rootPath: rootPath,
    port: process.env.PORT || 8080
  },
  production: {
    rootPath: rootPath,
    db: '*production DB URL here*',
    port: process.env.PORT || 8143
  }
}
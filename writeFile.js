var fs = require('fs');

module.exports = function writeFile(path, content, encoding) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(path, content, encoding || 'utf8', function(err) {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

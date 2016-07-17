var through = require("through2");

module.exports = function() {
  return through.obj(function(obj, enc, cb) {
    this.push(JSON.stringify(obj) + "\n");
    cb();
  });
};

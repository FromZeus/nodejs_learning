var through = require("through2");

module.exports = function() {
  return through.obj(function(chunk, enc, cb) {
    var ret;
    try {
      ret = JSON.parse(chunk);
    } catch (err) {
      ret = {error: err.message};
      //return cb(err);
    }
    this.push(ret);
    cb();
  });
};

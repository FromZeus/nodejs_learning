var through = require("./through2");

module.export = function() {
  return through.obj(function(chunk, enc, cb) {
    this.push(JSON.parse(chunk));
    cb();
  });
};

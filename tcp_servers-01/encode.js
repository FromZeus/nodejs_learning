var through = require("./through2");

module.export = function() {
  return through.obj(function(obj, enc, cb) {
    this.push(JSON.stringify(obj) + "\n");
    cb();
  });
};

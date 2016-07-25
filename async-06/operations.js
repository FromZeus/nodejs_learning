var async = require("async");
var fs = require("fs");
var path = require("path");

var dir = path.join(__dirname, "tmp");
var source = __filename;
var target = path.join(dir, "target");

var operations = [
  parallel(fs.mkdir.bind(fs, dir), fs.readFile.bind(fs, source)),
  extractResult(1),
  fs.writeFile.bind(fs, target)
]

function extractResult(pos) {
  return function(results, cb) {
    cb(null, results[pos]);
  }
}

function parallel() {
  var ops = Array.prototype.slice.call(arguments);
  return function(cb) {
    async.parallel(ops, cb);
  }
}

async.waterfall(operations, done);
//async.waterfall([mkdir, read, write], done);

function mkdir(cb) {
  fs.mkdir(dir, cb);
}

function read(cb) {
  fs.readFile(source, cb);
}

function write(content, cb) {
  fs.writeFile(target, content, cb);
}

function done(err) {
  if (err) {
    handleError(err);
  } else {
    console.log("Done");
  }
}

function handleErrors(cb) {
  return function(err, result) {
    if (err) {
      handleError(err);
    } else {
      cb(result);
    }
  }
}

function handleError(err) {
  console.error(err);
};

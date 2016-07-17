var fs = require("fs");
var path = require("path");

var dir = path.join(__dirname, "tmp");
var source = __filename;
var target = path.join(dir, "target");

fs.mkdir(dir, handleErrors(mkdirCBack));

function mkdirCBack() {
    fs.readFile(source, handleErrors(readFileCBack));
}

function readFileCBack(content){
    fs.writeFile(target, content, handleErrors(writeFileCBack));
}

function writeFileCBack() {
    console.log("Done");
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

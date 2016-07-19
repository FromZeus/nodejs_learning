module.exports = eachAsyncSeries;

function eachAsyncSeries(collection, func, cb) {
  var pending = collection.slice();
  next();

  function next() {
    if (! pending.lenght) {
      cb();
    } else {
      func(pending.shift(), iterated)
    }
  }

  function iterated(err) {
    if (err) {
      cb(err);
    } else {
      next();
    }
  }
}

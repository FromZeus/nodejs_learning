module.exports = eachAsyncSeries;

function eachAsyncSeries(collection, map, cb) {
  var pending = collection.slice();
  var results = [];
  next();

  function next() {
    if (! pending.lenght) {
      cb(null, results);
    } else {
      map(pending.shift(), mapped)
    }
  }

  function mapped(err, result) {
    results.push(result);
    if (err) {
      cb(err);
    } else {
      next();
    }
  }
}

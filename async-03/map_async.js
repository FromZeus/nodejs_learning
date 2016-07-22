module.exports = mapAsync;

function mapAsync(collection, map, cb) {
  var results = [];
  var pending = collection.length;
  var calledback = false;

  collection.forEach(function(elem, index) {
    map(elem, terminator(index));
  });

  function terminator(index) {
    return function terminated(err, result) {
      pending--;
      if (err) {
        callback(err);
      } else {
        results[index] = result;
        if (! pending) {
          callback(null, results);
        }
      }
    }
  }

  function callback(err, results) {
    if (! calledback) {
      calledback = true;
      cb(err, results);
    }
  }
}

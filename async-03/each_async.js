module.exports = eachAsync;

function eachAsync(collection, func, cb) {
  var pending = collection.length;
  var calledback = false;

  collection.forEach(function(elem) {
    func(elem, terminated);
  });

  function terminated(err) {
    pending--;
    if (err) {
      callback(err);
    } else if (! pending) {
      callback();
    }
  }

  function callback(err) {
    if (! calledback) {
      calledback = true;
      cb(err);
    }
  }
}

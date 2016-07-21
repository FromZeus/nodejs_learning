var mapAsyncLimit = require("./map_async_limit");

var messages = [
  "message 1", "message 2", "message 3",
  "message 4", "message 5", "message 6",
  "message 7", "message 8", "message 9"
];
var index = 0;

mapAsyncLimit(4, messages, send, done);

function done(err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log("All the messages has been sent:", results);
  }
}

function send(message, cb) {
  var err = Math.random() > 0.95 ? new Error("whaaa") : null;
  var value = ++ index;
  setTimeout(cb, randomTimeout(), err, value);
}

function randomTimeout() {
  return Math.floor(Math.random() * 1e3);
}

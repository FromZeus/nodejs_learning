var sendQueue = require("./send");

sendQueue.drain = drained;

for (var i = 0 ; i < 100; i++) {
  (function(i) {
    var message = "message " + i

    sendQueue.push(message, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log("Finished sending message %j. Result: %j", message, result);
      }
    });
  }(i));
}

function drained() {
  console.log("Queue is drained");
}

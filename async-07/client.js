/*var sendAll = require("./send");

var messages = ["message 1", "message 2", "message 3"];

sendAll(messages, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log("All messages have been sent!");
  }
});*/

var sendAll = require("./send");

var messages = ["message 1", "message 2", "message 3",
                "message 4", "message 5", "message 6"];

sendAll(messages, function(err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log("All messages have been sent! Results: %j", results);
  }
});

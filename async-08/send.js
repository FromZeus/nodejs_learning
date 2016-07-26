var async = require("async");

var maxConcurrent = Number(process.env.MAX_PARALLEL_SENDS) || 5;
var queue = async.queue(send, maxConcurrent);
var messages = ["message 1", "message 2", "message 3",
                "message 4", "message 5", "message 6"];

module.exports = queue;

function send(message, cb) {
  console.log("Sending %j", message);
  setTimeout(cb, randomTimeout(), null, randomReply());
}

function randomTimeout() {
  return Math.floor(Math.random() * 1e3);
}

function randomReply() {
  return Math.floor(Math.random() * 1e10);
}

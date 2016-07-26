/*var async = require("async");

module.exports = sendAll;

function sendAll(messages, cb) {
  async.each(messages, send, cb);
}

function send(message, cb) {
  console.log("Sending message %j", message);
  setTimeout(function() {
    console.log("Finished sending message %j", message);
    cb();
  }, randomTimeout());
}

function randomTimeout() {
  return Math.floor(Math.random() * 1e3);
}*/

/*var async = require("async");

module.exports = sendAll;

function sendAll(messages, cb) {
  async.map(messages, send, cb);
}

function send(message, cb) {
  console.log("Sending message %j", message);
  setTimeout(cb, randomTimeout(), null, randomResult());
}

function randomTimeout() {
  return Math.floor(Math.random() * 1e3);
}

function randomResult() {
  return Math.floor(Math.random() * 1e10);
}*/

/*var async = require("async");

module.exports = sendAll;

function sendAll(messages, cb) {
  async.eachSeries(messages, send, cb);
}

function send(message, cb) {
  console.log("Sending message %j", message);
  setTimeout(finished, randomTimeout(), null, randomResult());

  function finished(err, result) {
    console.log("Finished sending %j", message);
    cb(err, result);
  }
}

function randomTimeout() {
  return Math.floor(Math.random() * 1e3);
}

function randomResult() {
  return Math.floor(Math.random() * 1e10);
}*/

var async = require("async");

module.exports = sendAll;

function sendAll(messages, cb) {
  async.mapLimit(messages, 2, send, cb);
}

function send(message, cb) {
  console.log("Sending message %j", message);
  setTimeout(finished, randomTimeout(), null, randomResult());

  function finished(err, result) {
    console.log("Finished sending %j", message);
    cb(err, result);
  }
}

function randomTimeout() {
  return Math.floor(Math.random() * 1e3);
}

function randomResult() {
  return Math.floor(Math.random() * 1e10);
}

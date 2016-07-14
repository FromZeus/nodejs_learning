var server = require("./server");
var net = require("net");

server.listen(8000, function() {
    console.log("TCP server is listening on %j", server.address());
});

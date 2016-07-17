var net = require("net");
var Service = require("./service");

var server = net.createServer();

server.on("connection", function(conn) {
    console.log("New connection established");

    conn.setEncoding("utf8");

    conn.once("close", function() {
        console.log("Connection closed");
    });

    service = Service();
    service.on("error", function(err) {
      console.error(err);
      conn.end();
    });

    conn.pipe(service).pipe(conn);

    /*conn.on("data", function(buf) {
        conn.write(buf.toUpperCase());
        process.stdout.write("data: " + buf);
    });*/

    /*var emit = conn.emit;
    conn.emit = function(event) {
        console.log("Connection emitted event type %j", event);
        emit.apply(conn, arguments);
    };*/
});

module.exports = server;

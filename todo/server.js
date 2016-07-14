var restify = require("restify");
var bunyan = require("bunyan");

var options = {
    name: "ToDo API"
};
var server = restify.createServer(options);

server.use(restify.bodyParser({
    maxBodySize: 10 * 1024
}));

/*server.use(function(req, res, next) {
    console.log("middleware is here", req.body);
    //next(new Error("Fuck off dude"));
    next();
});*/

server.on("after", restify.auditLogger({
    log: bunyan.createLogger({
        name: "audit",
        stream: process.stdout
    })
}));

module.exports = server;

require("./routes");

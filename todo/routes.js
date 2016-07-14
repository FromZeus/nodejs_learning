var server = require("./server");
var resources = require("./resources");
var validating = require("./middleware/validating");
var schemas = require("./schemas");

// Lists

server.get("/lists", resources.lists.list);
server.put("/lists/:list", validating(schemas.list), resources.lists.create);
server.del("/lists/:list", resources.lists.del);

// Items

server.get("/lists/:list/items", resources.items.list);
server.post("/lists/:list/items", validating(schemas.item),
            resources.items.create);
server.del("/lists/:list/items/:item", resources.items.del);

/*server.get(urlPattern, function(req, res){
    res.send(obj);
});*/

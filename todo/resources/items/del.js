module.exports = function delItem(req, res, next){
    var body = req.body;
    console.log("body:", body);
    res.send({hey: "there"});
    next();
};

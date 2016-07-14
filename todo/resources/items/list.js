module.exports = function listItems(req, res, next){
    res.send({hey: "there"});
    next();
};

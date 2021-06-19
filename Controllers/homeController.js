const { response } = require("express");

class homeController{
    // [GET] /
    show(req, res, next)
    {
        res.send("WELLCOME");
    }
}

module.exports= new homeController;
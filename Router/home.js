const express       =require("express");
const router        =express.Router();
const homeController=require("../Controllers/homeController");

router.get("/home", homeController.show);

module.exports=router;
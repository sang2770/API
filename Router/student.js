const express           =require("express");
const router            =express.Router();
const studentController =require("../Controllers/studentController");
router.get("/:id", studentController.showItem)
router.get("/", studentController.show)
router.put("/:id", studentController.update);
router.delete("/:id", studentController.delete);
router.patch("/:id", studentController.UpdateItem);
router.post("/", studentController.create);


module.exports=router;
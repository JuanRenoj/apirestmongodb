const express=require("express");
const router=express.Router();
const ControllerUser=require("../controller/ControllerUser");

router.get("/info",(req,res)=>{
    console.log(req)
    res.status(200).send({autor:"Juan Renoj", message:"Wellcom to api rest, using momgodb"})
})

router.post("/user",ControllerUser.create);
router.get("/user/getall",ControllerUser.getAll);
router.get("/user/byid/:id",ControllerUser.getById);
router.patch("/user/update/:id",ControllerUser.update);
router.delete("/user/delete/:id",ControllerUser.delete);


module.exports=router
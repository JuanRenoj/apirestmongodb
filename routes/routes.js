const ModelUser=require('../model/ModelUser');
const express=require("express");
const router=express.Router();
const ControllerUser=require("../controller/ControllerUser");

router.post("/user",ControllerUser.create);
router.get("/getuser",ControllerUser.getAll);
router.get("/userid/:id",ControllerUser.getById);
router.patch("/userupdate/:id",ControllerUser.update);
router.delete("/delete/:id",ControllerUser.delete);


module.exports=router
/*
router.post("/user",async (req,res)=>{
    const data=new ModelUser({
        name:req.body.name,
        age:req.body.age
    });
    try{
        const saveData= await data.save();
        res.status(200).json(saveData)
    }catch(error){
        res.status(500).send({message:error.message})
    }
})
router.get("/getuser",async (req,res)=>{
    try{
        const data=await ModelUser.find();
        res.status(200).send(data)  

    }catch(error){
        res.status(500).send({...error})
    }
})
router.get("/userid/:id",async(req,res)=>{
    try{
        const data=await ModelUser.findById(req.params.id);    
        res.status(200).send(data)
           
    }catch(error){
        res.status(500).send({message:"Internal server error", erro:error})
    }
})
router.patch("/userupdate/:id",async(req,res)=>{
  try {
    const id=req.params.id;
    const updatedData=req.body;
    const options={new:true};

    const result=await ModelUser.findByIdAndUpdate(
        id, updatedData,options
    )
    console.log(result)
    res.status(200).send(result)
  } catch (error) {
    console.log(error)
    res.status(500).send({message:"Internal server error"})
  }
    
})
router.delete("/delete/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await ModelUser.findByIdAndDelete(id);
        res.status(200).send(`Document with ${data.name} has been deleted...`);
    } catch (error) {
        res.status(500).send(`Internal server error ${error.message}`)
    }
})*/



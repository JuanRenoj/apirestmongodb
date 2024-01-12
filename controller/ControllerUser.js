const ModelUser=require("../model/ModelUser");

 exports.create=async(req,res)=>{
    const data=new ModelUser({
        name:req.body.name,
        age:req.body.age
    });
    try{
        const saveData= await data.save();
        res.status(200).json(saveData)
    }catch(error){
        console.log(error)
        res.status(500).send({message:error.message})
    }

 }
 exports.getAll=async(req,res)=>{
    try{
        const data=await ModelUser.find();
        res.status(200).send(data)  

    }catch(error){
        res.status(500).send({...error})
    }
 }

 exports.getById=async(req,res)=>{
    try{
        const data=await ModelUser.findById(req.params.id);    
        res.status(200).send(data)
           
    }catch(error){
        res.status(500).send({message:"Internal server error", erro:error})
    }
 }
 exports.update=async(req,res)=>{
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
 }
 exports.delete=async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await ModelUser.findByIdAndDelete(id);
        res.status(200).send({message:`Document with ${data.name} has been deleted...`});
    } catch (error) {
        console.log(error)
        res.status(500).send(`Internal server error ${error.message}`)
    }
 }
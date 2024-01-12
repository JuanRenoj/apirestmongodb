
require('dotenv').config();
const  express=require("express");
const mongoose=require("mongoose");
const mongoString=process.env.DATABASE_URL

const routes=require("./routes/routes");

mongoose.connect(mongoString)
const dataBase=mongoose.connection

dataBase.on('error',(error)=>{
    console.log(error)
})
dataBase.on("connected",()=>{
    console.log("DataBase connected");
})

const app=express();
const port=3004;
app.use(express.json())

app.get("/info",(req,res)=>{
    res.status(200).send({autor:"Juan Renoj", message:"Wellcom to api rest, using momgodb"})
})

app.use("/api",routes);

app.listen(port,()=>{
    console.log("server executed on port "+port)
})

//https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
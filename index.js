
require('dotenv').config();
const  express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();

app.use(cors());
app.use(cors({
    origin:[process.env.ORIGIN]
}));

const mongoString=process.env.DATABASE_URL


mongoose.connect(mongoString)
const dataBase=mongoose.connection

dataBase.on('error',(error)=>{
    console.log(error)
})
dataBase.on("connected",()=>{
    console.log("DataBase connected");
})


const port=process.env.PORT || 3004;
app.use(express.json())

const routes=require("./routes/routes");
app.use(routes);

app.listen(port,()=>{
    console.log("server executed on port "+port)
})



require('dotenv').config();
const  express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(cors({
    origin:['htpps://localhost:3000','htpp://localhost:3000']
}));
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


const port=3004;
app.use(express.json())


app.use("/",cors(),routes);

app.listen(port,()=>{
    console.log("server executed on port "+port)
})

//https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
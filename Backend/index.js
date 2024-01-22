const express = require("express");
const app = express();
const connectDB = require("./db/connect");


const dotenv = require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// app.get("/",(req,res)=>{
//     res.send("HELLO WORLD");
// });

const itemsRouter = require("./routes/items");
app.use("/home",itemsRouter);



const start= async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
        console.log(`Listening ON PORT ${port}`);
    })
    }catch(error){
        console.log(error);
    }
}

start();


// app.listen(port,()=>{
//     console.log(`Listening ON PORT ${port}`);
// })

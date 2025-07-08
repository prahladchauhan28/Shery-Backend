const express=require("express");
const connectToDb =require("./src/db/db");
const dotenv=require("dotenv")


const app=express();
connectToDb();
app.use(express.json());

app.get("/notes",(req,res)=>{
    res.send("Hello, World!");
})

app.post("/notes",(req,res)=>{
    const {title,content}=req.body;
    console.log(title,content);
    res.send("note created")
})

app.listen(process.env.PORT,()=>{
    console.log("server running at port 3000 ");
})
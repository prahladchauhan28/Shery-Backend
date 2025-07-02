const express=require("express");

const app=express();
app.use(express.json()); // To parse JSON request body

const notes=[];

app.post("/notes",(req,res)=>{

    const {title,description}=req.body;
    notes.push({title,description});
    res.send(notes);
    console.log(notes);
    
})


app.listen(3000,()=>{
    console.log("server is running on port:3000 ");
})
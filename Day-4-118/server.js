const express=require("express");

const app=express();
const notes=[];

// middle ware
app.use(express.json());

// working on notes mini mini project level-0.

 //using .post to add date to notes  

app.post("/notes",(req,res)=>{
    const {title,description}=req.body;
    notes.push({title,description});
    res.json({
        "message":"note created successfully",
          notes:notes
    });
});

 //using .get to get date of notes

app.get("/notes",(req,res)=>{

    res.json({
        "message":"here is the notes",
            notes:notes
    })
})

 //using .delete to delete date from notes
 
 app.delete("/notes/:index",(req,res)=>{
    const index=parseInt(req.params.index);
    delete notes[index];
    res.json({
        "message":"Data delete successfully"
    })
 })

 //using .patch to update date from notes

 app.patch("/notes/:index",(req,res)=>{
    const index=parseInt(req.params.index);
    const {title,description}=req.body;
    notes[index]={title,description};
    res.json({
        "message":"Data updated successfully",
        notes:notes
    })
})



app.listen(3000,()=>{
    console.log("server is running at port 3000")
});
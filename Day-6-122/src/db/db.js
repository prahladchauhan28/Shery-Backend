const monogose=require("mongoose");

function connectToDb()
{
    monogose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to DB!");
    })
}

module.exports=connectToDb;
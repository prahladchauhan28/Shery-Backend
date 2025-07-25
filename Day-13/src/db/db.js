const mongoose=require("mongoose");


function ConnectToDb()
{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connect To Db");
    })
    .catch((err)=>{
        console.log(err);
        
    })
}
module.exports=ConnectToDb;
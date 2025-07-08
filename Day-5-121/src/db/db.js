const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

function connectToDb()
{
   mongoose.connect(process.env.MONGO_URI)
   .then(()=>{
       console.log("Connected to DB !");
   })
   .catch((err)=>{
       console.log("DB connection failed !");
       console.error(err);
   });
}

module.exports=connectToDb;
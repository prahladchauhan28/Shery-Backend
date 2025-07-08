const mongoose=require("mongoose");

function connectToDb()
{
   mongoose.connect("mongodb+srv://PrahladChauhan:8hQHPKVcH08tic8u@cohort.louhf2k.mongodb.net/cohort")
   .then(()=>{
    console.log("Connented to DB !");
   })
}

module.exports=connectToDb;
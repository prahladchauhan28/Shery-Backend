const app=require("./src/app");
const ConnectToDB=require("./src/db/db")
require('dotenv').config()


ConnectToDB();

app.listen(3000,()=>{
    console.log("server is running at port :3000");
    
})
const http=require("http");

const server=http.createServer((req,res)=>{
        res.end("hello from server!!");
        
});

server.listen(3000,()=>{
    console.log("server running at port 3000 ");
});
const http=require('http');
const fs=require('fs');
 
http.createServer((req,res)=>{

fs.readFile('./Game/index.html',function(error,data){

    if(error){
        res.writeHead(404);
        res.write("index html page not found")
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end()
    }
})



}).listen(5050);

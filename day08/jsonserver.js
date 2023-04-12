const http=require('http');
const fs=require('fs');

http.createServer(function(req,res){
    fs.readFile('myuser.json',function(err,data){
        res.writeHead(200,{'Content-Type':'application/json'});
        data=JSON.parse(data);
        res.end(JSON.stringify(data))
    })
}).listen(5000);
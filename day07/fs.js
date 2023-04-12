const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    var content ="<h1>welcome my home page</h1><p>this page in node js</p>"

    fs.writeFile('index.html',content,function(err){
        if(err) throw err;
        console.log("data seve")
    });
    fs.readFile('index.html',function(err,data){
        if(err) throw err;
        res.writeHead(200,{'Contant-Type':'text/html'});
        res.write(data);
        res.end();
    })

}).listen(8080);

console.log("server create....");
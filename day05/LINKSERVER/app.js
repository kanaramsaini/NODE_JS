const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
        res.writeHead(200,"ok",{'Contant-type':'text/html'})
    const url=req.url;
    if(url==='/'){
        fs.readFile('home.html',(error,data)=>{
            if(error)throw error;
           return res.end(data);
        })
    }else if(url==='/About'){
        fs.readFile('About.html',(error,data)=>{
            if(error)throw error;
            res.end(data);
        })
    }else{
        res.end('<h1>404 page not fount </h1>')
    }
}).listen(3000)


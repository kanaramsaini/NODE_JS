const http=require('http');
const fs=require('fs');
const url=require('url');

http.createServer(function(req,res){
var path=url.parse(req.url).pathname;
    switch (path) {
        case '/':
            readFileHTML('./index.html',res)
            break;
            case '/About':
            readFileHTML('./About.html',res)
            break;
            case '/service':
            readFileHTML('./service.html',res)
            break;
            case '/login':
            readFileHTML('./login.html',res)
            break;
    
        default:
            res.writeHead(404);
            res.write(" 404 Error Page Not Found ");
            res.end();
            break;
    }
}).listen(5000);

function readFileHTML(path,res){

    fs.readFile(path,'utf-8',function(error,data){
        if(error){
            res.writeHead(404);
            res.write('fill is not found');
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        }
    })
}
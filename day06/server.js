const http=require('http');
const evalute=require('./evalute');
const custom=require('./custom');
const Module=require('./module');

function funinport(req,res){
    res.writeHead(200,{'Content.type':'text/html'});

    res.write('Welcome Home Page.....');
    res.write('\n'+evalute.add(20,40));
    res.write('\n'+evalute.multiply(20,20));
    res.write('\n'+custom.date());
    res.write('\n'+custom.str1+custom.str2)
    res.write('\n'+Module.myInformation("kanaram saini",19))

    res.end();
}

http.createServer(funinport).listen(8080);

console.log("creat server......")
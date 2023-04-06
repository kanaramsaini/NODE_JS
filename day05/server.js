const http=require('http');
const { title } = require('process');




function onServer(req,res){

    var url=req.url;

    if(url==='/About'){
        res.writeHead(200,"ok",{'Content-type':'text/plain'});
        res.write('Welcome About Page')
       return res.end();
    }else if(url==='/contact'){
        res.writeHead(200,"ok",{'Content-type':'text/html'});
        res.write('<html>');
        res.write('<title> form fill </title>' );
            res.write('<body>');
            res.write('Full Name <input type="text"></br>Contact.No <input type="number"></br>');
            res.write('Choose a profile picture: <input type="file" id="avatar" accept="image/png, image/jpeg"> ')
            res.write('</body>');
        res.write('</html>')
       return res.end();
    }else{
        res.writeHead(200,"ok",{'Content-type':'text/plain'});
        res.write('welcome home page ');
        res.end();
    }
};

http.createServer(onServer).listen(5050);

console.log("Create Server .......");


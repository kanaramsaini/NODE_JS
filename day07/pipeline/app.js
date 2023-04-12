const http=require('http');
const fs=require('fs');
const { on } = require('events');

http.createServer((req,res)=>{
          var datashow="this is file run write steram"

            var writer=fs.createWriteStream('index.txt');
            writer.write(datashow,'utf-8');
            writer.end();
            writer.on('finish',function(){
                        console.log("prosess writing completed")
            }).on('err',function(err){
                        console.log(err);
            });

            var pipeRead=fs.createReadStream('index.txt');
            var pipewrite=fs.createWriteStream('write.txt');

            pipeRead.pipe(pipewrite);

            pipewrite.on('finish',()=>{
                    var content='';
                    var Read=fs.createWriteStream('write.txt');
                    Read.setDefaultEncoding('UTF-8');
                    Read.on('err',(err)=>{
                        console.log(err);
                    }).on('data',(chunk)=>{
                            content+=chunk;
                    }).on('end',function(){
                        res.on('err',(error)=>{
                            console.log(error);
                        })
                        res.writeHead(200,{'Content-Type':'text/plain'});
                        res.write(content);
                        res.end();
                    })

            })
}).listen(3000);
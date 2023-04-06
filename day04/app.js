// const http = require('http');

//  const server = http.createServer((req,res) => {
//      console.log(req.url, req.method, req.headers);
// //     process.exit();
// })

// server.listen(8080);



const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Js</title></head>');
    res.write('<body><h2>Hello from web server!</h2></body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);


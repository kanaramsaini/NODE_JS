const http =require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    console.log(req.url)
    const url=req.url;

    if(url==='/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<title>MY SERVER </title>');

        res.write('<body>');
            res.write('<h1>Home Page Node js Server,/h1>');
        res.write('</body>')
        res.write('</html>')
       return res.end();
    }

    if(url==='/About'){
        res.write('<html>');
        res.write('<title>ABOUT SERVER </title>');

        res.write('<body>');
            res.write('<h1>About Page Node js Server</h1>');
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    if(url==='/contact'){
        res.write('<html>');
        res.write('<title>Form Fill</title>');

        res.write('<body>');
        res.write('<h1>Contcat form fill node js server</h1>');
            res.write('<form>');
                res.write('<input type="text"></br><input type="number"><button>Submit</button>');

            res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();

    }

   
}).listen(3000)

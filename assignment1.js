const http = require('http');

const server=http.createServer((req,res)=>{
    const url =req.url;
    const method=req.method;
    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>my first pagr</title></head>');
        res.write('<body><h1>Hello from my Node.js server</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(url==='/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>my second  pagr</title></head>');
        res.write('<body><h1>USERSSSSSSSSSSSSSSS</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(url==='/create-user'){
        const body=[];
        req.on('data',chunk=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]); 
        });
        res.statusCode=302;
        res.setHeader('location','/');
        res.end;
    }
});

server.listen(3000);
/* console.log("hello form node js utsav");
const fs = require("fs");
fs.writeFileSync('hello.txt','Hello form node js Utsav'); */
const http = require('http');

const routes =require('./routes.js');

//const fs=require('fs');
const server =http.createServer(routes);
server.listen(3000);
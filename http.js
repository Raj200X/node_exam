const http = require('http');

http.createServer((req,res)=>{
    res.end(`Hi from http`);
}).listen(3000);

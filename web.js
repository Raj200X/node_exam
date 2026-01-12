const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    fs.readFile('html/web.html','utf-8',(err,data)=>{
        if(err) {
            res.writeHead(500,{"contentType":"text/plain"})
            res.end('internal server error')
        }
        else {
            res.writeHead(200,{"content-type":"text/html"})
            res.end(data);
        }
} )
}).listen(3000);
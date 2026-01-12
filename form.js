//const http = require('http');
//
//http.createServer((req,res)=>{
//    res.writeHead(200,{"content-type":"text/html"})
//    if (req.url=='/'){
//        res.write(`<form action="/submit" method="post">
//                <input type="text" placeholder="enter name">
//                <input type="email" placeholder="email">
//                <button>Click</button>
//
//                </form> `)
//        res.end();
//    }
//    else if (req.url=='/submit'){
//        res.write("<h1>Data Submitted Successfully</h1>");
//        res.end();
//    }
////    res.end();
//
//}).listen(3000);


const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    fs.readFile('html/form.html', 'utf-8', (err, data) => {

        if (err) {
            res.writeHead(500, {"content-type": "text/html"});
            res.end("Internal Error Occured");
        }
        res.writeHead(200, {"content-type": "text/html"});

        if (req.url == '/') {
            
            res.end(data)
        } else if (req.url == '/submit') {

            res.write("<h1>Data Submitted Successfully</h1>");

            res.end(`${name} and ${email}`);
        }
        res.end();

    })
}).listen(3000)
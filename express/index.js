const express = require('express');

const app = express();

const path = require('path')



app.get('/',(req,res)=>{
    res.send("Hi")
})
app.get('/about',(req,res)=>{
    res.send("This is about page")
})
app.use((req,res)=>{
    const absPath = path.resolve('404.html');
    res.status(404).sendFile(absPath);

})
app.listen(3000)
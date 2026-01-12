import express from 'express'

const app = express();


app.use((req,res,next)=>{
    console.log(req.url);
    next();
});

 app.get('/',(req,res)=>{
     res.send("HomePage")
 })

 app.get('/products',(req, res)=>{
     res.send("Product page")
 })

 app.get('/home',(req, res)=>{
     res.send("Home page")
 })
 app.listen(3000);
import express from "express";
import fs from 'fs'
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/form',(req, res)=>{
    res.send(`<form action=/submit method=post >
    Enter Name
                <input type="text" name="name" placeholder="enter name" >
                <br>
                <br>
                Enter Email
                <input type="email" name="email" placeholder="Enter Email">
                <br>
                <br>
                <button type="submit">submit</button>
  </form>  `)
})

app.post('/submit',(req,res)=>{
    fs.writeFile('form.json',`name : ${req.body.name} and email : ${req.body.email}`)
    res.send(`Your Name is ${req.body.name} and email is ${req.body.email}`)

})
app.listen(3000);
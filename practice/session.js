import express from "express";
import session from 'express-session'

const app = express()

app.use(session({
    name:'session',
    keys:['key1','key2'],
    maxAge:15000
}));

app.get('/',(req,res)=>{
        req.session.user = "raj"
        res.send("session created")
})

app.get('/dasboard',(req,res)=>{
    res.send(`Welcome ${req.session.user}`)
})
app.listen(3000)

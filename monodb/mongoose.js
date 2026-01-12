import mongoose from 'mongoose'

import express from "express";

const app = express();

mongoose.connect("mongodb://localhost:27017/college").then(()=>{
    console.log("connection established")

}).catch((err)=>{
        console.log(err)
    })


const schema = mongoose.Schema({
    name:Number,
    age:Number,
    message:String
})
const model = mongoose.model('messages',schema );

app.get('/',async (req,res)=>{
   const result = await  model.find()
    console.log(result)
    res.send(res.json(result))
})
app.listen(3000);

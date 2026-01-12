import express from "express";
import {MongoClient} from "mongodb";

const app = express()

const dbName = "college"
const url = "mongodb://localhost:27017"

const client = MongoClient.connect(url).then((connection)=>{
        console.log("connection created")
        const db = connection.db(dbName)
        const collection = db.collection('students')

        app.get('/',async (req,res)=>{
            const data = await  collection.find().toArray();
            console.log(data);
            res.send('');

        })


    }).catch((err)=>{
        console.log(err)
    })
app.listen(3000)
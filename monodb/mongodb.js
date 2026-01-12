import express from 'express'
import {MongoClient} from "mongodb";

const app = express();

const dbName = "college"
const url = "mongodb://localhost:27017"

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const client = new MongoClient(url)

client.connect().then((connection) => {
    const db = connection.db(dbName);
    const collection = db.collection('students')

    app.get('/api', async (req, res) => {
        const result = await  collection.find().toArray();
        res.send(result)
    })
    app.get('/add',  (req, res) => {
        res.send(`<form action=/submit method=post>
        Enter Name
                <input name="name" placeholder="Enter Name">
                <br><br>
                 Enter Age
                <input name="age" placeholder="Enter Email">
                <br><br>
                 Enter Reg No.
                    <input name="reg" placeholder="Enter Reg">
                    <br><br>
                    <button type="submit">Submit data</button>
                </form>`)
    })

    app.post('/submit',async(req,res)=>{
        const {name,age,reg} = req.body;
           await  collection.insertOne({name:`${name}`,age:`${age}`,reg:`${reg}`});
        res.redirect('/api')
    })
    app.delete('/delete/:name',(req, res)=>{
        console.log(req.params.name)
        collection.findOneAndDelete({name:req.params.name});
        res.redirect('/api')
    })

})
app.listen(3000)

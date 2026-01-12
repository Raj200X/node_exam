import express from "express";

const app = express();

app.use((req, res, next) => {
//    const age = Number(req.query.age);
    if (!req.query.age || req.query.age < 18) {
        res.send("You are not permitted to access this page")
    } else {
        next();
    }
})

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get('/about', (req, res) => {
    res.send("about Page")
})

app.get('/other', (req, res) => {
    res.send("other Page")
})
app.listen(3000);
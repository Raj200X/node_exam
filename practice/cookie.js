import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import {fileURLToPath} from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cookieParser());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "cookie.html"));

});
app.post('/submit', (req, res) => {
    res.cookie("username", req.body.cookie, {maxAge: req.body.age})

    res.redirect('/get');
})
app.get('/get', (req, res) => {
    res.send(`Cookies are set for the user ${req.cookies.username}`);
})
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

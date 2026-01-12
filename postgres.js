import pg from "pg";
import express from "express";

const { Pool } = pg;
const app = express();

const pool = new Pool({
    user: "raj",
    host: "localhost",       
    database: "crud",
    password: "",
    port: 5432
});

app.use(express.json());

pool.connect()
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

app.get("/create", async (req, res) => {
    const create = `
        CREATE TABLE IF NOT EXISTS students (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            reg_no INT NOT NULL
        )
    `;
    await pool.query(create);
    res.send("Table created");
});

app.get("/add", async (req, res) => {
    const { name, reg_no } = req.query;

    const add = `
        INSERT INTO students (name, reg_no)
        VALUES ($1, $2)
    `;
    await pool.query(add, [name, reg_no]);
    res.send("Row inserted");
});

app.get("/", async (req, res) => {
    const result = await pool.query("SELECT * FROM students");
    res.json(result.rows);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

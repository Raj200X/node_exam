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

/* Create table */
app.get("/create", async (req, res) => {
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS students (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                reg_no INT NOT NULL
            )
        `;
        await pool.query(query);
        res.send("Table created");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

/* Insert row */
app.get("/add", async (req, res) => {
    try {
        const { name, reg_no } = req.query;

        if (!name || !reg_no) {
            return res.status(400).send("name and reg_no are required");
        }

        const query = `
            INSERT INTO students (name, reg_no)
            VALUES ($1, $2)
        `;
        await pool.query(query, [name, reg_no]);

        res.send("Row inserted");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

/* Fetch all rows */
app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM students");
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

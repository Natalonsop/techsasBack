import dbConnection from "./database/dbConnection.js"
import express  from "express"
import cors from "cors"

const api = express();

api.use(cors());
api.use(express.json());

api.get('/sportech', (req, res) => {
    res.send("puto el que lo lea jejex");
});

api.listen(8000, () =>{ 
    console.log("toy aqui ._./");
});
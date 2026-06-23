import express from 'express';
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.static('public'));

import { ApiR } from './routes/api.js';

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use(express.json());

app.get("/main", (req, res)=>{
    res.send("Главная страница (/main)")
});

app.use("/api", ApiR);

app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Сервер на порту ${PORT}`);
});
import mongoose from 'mongoose';
import express from 'express';
import * as dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import cors from "cors"
import userRoutes from './routes/userRoutes.js';
import path, { dirname } from "path"
import { fileURLToPath } from 'url';

dotenv.config()

const app = express();

    
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({origin: "http://localhost:3001", credentials: true}))


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('/images', express.static(path.join(__dirname,'images')));


mongoose.connect(process.env.DB_URI).then(()=>{

    app.listen(3000, ()=>{
        console.log("salut salut");
    })
})

app.get('/',(req,res)=>{
    res.send("ff")
})

app.use('/api', userRoutes);


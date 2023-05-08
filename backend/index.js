import mongoose from 'mongoose';
import express from 'express';
import * as dotenv from 'dotenv'
import cors from "cors"
import adminRoutes from './routes/adminRoutes.js';
// import user01Routes from './Routes/user01Routes.js'
dotenv.config()

const app = express();

    
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URI).then(()=>{

    app.listen(3000, ()=>{
        console.log("salut salut");
    })
})

app.get('/',(req,res)=>{
    res.send("ff")
})

app.use('/api', adminRoutes);


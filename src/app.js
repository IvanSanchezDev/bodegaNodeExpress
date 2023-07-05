import express from "express";
import dotenv from 'dotenv';


dotenv.config();
const app=express();

app.use(express.json());

const config=JSON.parse(process.env.MY_CONFIG);

app.listen(config, ()=>{
    console.log("server corriendoo");
})

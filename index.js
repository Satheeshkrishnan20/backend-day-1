import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
let port=3000;
let app=express();
let __dirname=dirname(fileURLToPath(import.meta.url));


app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html")
})

app.get("/",(req,res)=>{
    res.send("<h1>successfully created my first server</h1>")
})



app.listen(port,()=>{
    console.log("hiii");
    
})
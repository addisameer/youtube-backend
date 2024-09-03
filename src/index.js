import { connectDb } from "./db/index.js";
import express from "express"



const app = express()

connectDb()
.then(()=> {
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is listenng on port :${process.env.PORT}`);
    })


})
.catch((error)=>{
    console.log("Database connection failed",error);

})



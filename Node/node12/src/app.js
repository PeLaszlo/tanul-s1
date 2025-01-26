import express from "express";
import authorRouter from "./router/authorRouter.js"
const app=express();

app.use("/authors",authorRouter);
app.use("/add-book",authorRouter);

app.use((req,res)=>{
    res.status(404).send("No Endpoint detected");
});

export default app;
import express from "express";
import bookRouter from "./bookRouter.js";

const app=express();
const PORT=8000;

app.use("/books",bookRouter);

app.listen(PORT, () => {
    console.log(`A Szerver fut a http://localhost:${PORT} -as porton`);
  });






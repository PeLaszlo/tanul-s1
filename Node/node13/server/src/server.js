import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = Number(process.env.SERVER_PORT) || 8000;


app.listen(PORT,()=>{console.log("Server is running on Port: ",PORT)});
import express from "express";
import cont from "./controllers/authcontroller.js";
import userRouter from "./routers/userRouter.js";
import autenticate from "./midwares/autenticate.js";

const app=express();
const router=express.Router();

app.use(express.json());
app.use(autenticate);

app.use("/users",userRouter);
app.post("/auth/login",cont.login);
app.use("/",(req,res)=>{res.status(404).send("no endpoint is detected !")});


export default  app;
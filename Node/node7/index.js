import express, { json } from"express";
import morgan from "morgan";
//import cors from "cors";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(morgan("common"));

app.use(req,res,next=>{
    console.log(req.method, req.port);
    next();
});

app.use("/protected",(req, res, next)=>{
    const auToken = req.header('x-auth-token');
    if(auToken) next();
    else res.status(403).send("Az autentikációs token hiányzik");
});

app.use("/admin",(req, res, next)=>{
    const auToken = req.header('x-auth-token');
    if(auToken) next();
    else res.status(403).send("Az autentikációs token hiányzik");
});

app.use("/admin",(req,res,next)=>{
    const isAdmin=req.header("isAdmin");
    if (isAdmin && isAdmin=="true")
         next();
    else res.status(403).send("Csak Admin joggal lehet belépni");
});

app.get("/public",(req,res)=>{
    res.send("A nyilvános tartalom elérhető..");
});

app.get("/protected",(req,res)=>{
    const auToken = req.header('x-auth-token');
    res.send("Üdvözlöm kedves "+auToken+" Ez a protected tartalmon");
});

app.get("/admin",(req,res)=>{
    res.send("Ez az admin tartalom");
});

app.use((req,res,next)=>{
    if(req.body.name) next();
    else res.status(400).send("hiányzik a név nező");
});

app.use("/",(req,res)=>{
    res.status(404).send("Nincs végpont.");
});

app.listen(PORT, () => {
    console.log(`A Szerver fut ${PORT} -as porton`);
  });
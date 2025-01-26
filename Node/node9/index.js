import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const PORT=8000;

app.use(express.json());
app.get("/books",async(req,res)=>{
    try{
        const users=await prisma.book.findMany();
        res.json({Answer:"OK",table: users});
    }
    catch(error)
    {
        console.log("prisma hiba:",error.message );
        res.status(500).send("Fatal Server error");
    }
});


app.post("/books",async(req,res)=>{
    if(req.body)
    {
        const newbook=req.body;
        if(newbook.title && newbook.author)
        {
            const result=await prisma.book.create({data:newbook});
            res.json({Ansew:"OK",book:newbook});
        }
        else res.status(403).send("missing data error, title and author of book is composory");
    }
    else res.status(403).send("bad request, No data detected");
});

app.get("/books/count",async(req,res)=>{
   try {
    const bookCount = await prisma.book.count();
    res.json({Answer:"OK", count: bookCount});
   }
   catch(error)
   {
    console.log("prisma hiba:",error.message );
    res.status(500).send("Fatal Server error 2");
   }
});

app.get("/books/:bookid",async(req,res)=>{
    const bookid=Number(req.params.bookid);
    try{
        const users=await prisma.book.findUnique({ where: { id: bookid } });
        res.json({Answer:"OK",table: users});
    }
    catch(error)
    {
        console.log("prisma hiba:",error.message );
        res.status(500).send("Fatal Server error");
    }
});



app.patch("/books/:bookid",async(req,res)=>{
    const bookid=Number(req.params.bookid);
    const book=req.body;
    try {
        const updatedBook = await prisma.book.update({
          where: { id: bookid },
          data: book});
        res.json({Answer:"OK", data: updatedBook });
      } catch (error) {
        console.log("prisma hiba:",error.message );
        res.status(500).send("Fatal Server error");
      }
});

app.use((req,res)=>{
    res.status(404).send("No endpoint found");
});

app.listen(PORT, () => {
    console.log("Server is running on port: ",PORT);
  });
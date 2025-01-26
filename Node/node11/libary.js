import express from"express";
import { PrismaClient } from "@prisma/client";

const app=express();
const prisma= new PrismaClient();
const PORT=8000;

app.use(express.json());

app.get("/authors",async(req,res)=>{
    try
    {
        const authors=await prisma.author.findMany();
        res.json(authors);
    }
    catch(error)
    {
        res.status(500).send(error.message);
        console.log("prisma hiba: ",error.message);
    }
});

app.post("/add-book",async(req,res)=>{
    let {title, genre, publishedAt, authorId}=req.body;
    if(title && genre && publishedAt && authorId)
    {
        if(publishedAt.length<24) publishedAt=publishedAt.substring(0,10)+"T00:00:00.000Z";
        try{
        const book=await prisma.book.create({
            data:{title,authorId,genre,publishedAt}
        });
        res.status(201).json(book);
        }
        catch(error)
        {
            res.status(500).send(error.message);
            console.log("prisma hiba: ",error.message);
        }
    }
    else
    {
        res.status(400).send("All fields of book are required. ");
    }
});

app.get("/books-by-genre",async(req,res)=>{
    const genre=req.query.genre;
    try
    {
        const authors=await prisma.book.findMany({
            where:{genre: {contains: genre,mode: "insensitive" }}
        });
        res.json(authors);
    }
    catch(error)
    {
        res.status(500).send(error.message);
        console.log("prisma hiba: ",error.message);
    }
    
});

app.get("/books-by-author",async(req,res)=>{
    const authorId=req.query.authorId;
    const id=Number(authorId);
    if (!isNaN(id))
    {
        try
    {
      const books=await prisma.book.findMany({
        where:{authorId:id}
      });
      res.json(books);
    }
    catch(error)
    {
        res.status(500).send(error.message);
        console.log("prisma hiba: ",error.message);
    }
    }
    else res.status(500).send("Bad or missing parameter ");

});

app.get("/members-by-join-date",async(req,res)=>{
    const after=req.query.after;
    try
    {
        const members=await prisma.member.findMany({
            where:{joinedAt : {gt: after+"T00:00:00.000Z"}}
        });
        res.json(members);
    }
    catch(error)
    {
        res.status(500).send(error.message);
        console.log("prisma hiba: ",error.message);
    }

});

app.use(async(req,res)=>{
    res.status(400).send("No endpoint detected");
});

app.listen(PORT,()=>{console.log("Server is running now, port: ",PORT)});
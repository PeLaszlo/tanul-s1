import express, {query} from "express";
import fs from "fs";

const bookRouter=express.Router();

function readBooks()
{
    return JSON.parse(fs.readFileSync("./books.json"));
}

function writeBooks(books)
{
    fs.writeFileSync("./books.json",JSON.stringify(books));
}

bookRouter.get("/",(req,res)=>{
    const books=readBooks();
    res.json(books);
});

bookRouter.get("/search",(req,res)=>{
    const {title}=req.query;
    if(title)
    {
        const books=readBooks().filter((book)=>book.title.includes(title));
        res.json(books);
    }
    else res.status(400).send("hibás keresési paraméter");
});

bookRouter.get("/filter",(req,res)=>{
    const {minPage,maxPage}=req.query;
    if(minPage && maxPage)
    {
        const books=readBooks().filter((book)=>(book.pages>=minPage && book.pages<=maxPage));
        res.json(books);
    }
    else res.status(400).send("hibás szűrő paraméter");
});

bookRouter.get("/:id",(req,res)=>{
    const id=req.params.id;
    if(id)
    {
        const book=readBooks().find((book)=>book.id==id);
        if (book) res.json(book);
        else res.status(404).send("A konyv nem található");
    }
    else res.status(400).send("Hibás útvonal");
});

bookRouter.use(express.json());

bookRouter.post("/",(req,res)=>{
    const book=req.body;
    if(book && book.title && book.author && book.year && book.pages)
    {
        const books=readBooks();
        book.id=newId(books);
        books.push(book);
        writeBooks(books);
        res.json(book);
    }
    else res.status(400).send("Az adatok hibásak");
});

bookRouter.delete("/:id",(req,res)=>{
    const id=req.params.id;
    const books=readBooks();
    const index=books.findIndex((book)=>book.id==id);
    if (index!=1) {
        books.splice(index,1);
        writeBooks(books);
        res.send("A könyv törölve");
    }
    else 
    {
        res.status(404).send("A könyv nem található");
    }
});


export default bookRouter;

function newId(books)
{
    return books.reduce((max,book)=>(book.id>max ? book.id : max),books[0].id)+1;
}
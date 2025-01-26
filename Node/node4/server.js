const http=require("http");
const fs=require("fs");
const url= require("url");

const host = "localhost";
const port = 8000 ;
const filename="book.json";

function readBooks()
{
    const data=fs.readFileSync(filename);
    return JSON.parse(data);
}

function writebooks(books)
{
    const data=JSON.stringify(books);
    fs.writeFileSync(filename,data);
}

function requestLisener(req,res)
{
    const reqUrl = url.parse(req.url, true);
    const {pathname} = reqUrl;
    const books=readBooks()
    if (pathname== "/books" && req.method === "GET")
    {
        const books=readBooks();
        res.writeHead(200,{"Content-Type": "application/json"});
        res.end(JSON.stringify(books));
    }
    else if (pathname.startsWith("/books")  && req.method === "GET")
    {
        const index=Number(pathname.split("/")[2]);       
        const book=books.find((item)=>item.id==index);
        if(book){
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(book));
            }
         else
        {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Book not found, Nincs ilyen azonosítóju könyv 2"}));  
         }             
    }
    else if (pathname== "/books" && req.method === "POST")
    {
        let body = "";
        req.on("data", (chunck) => (body += chunck));
        req.on("end",()=>{
            const {title,author,year} = JSON.parse(body);
            if( title && author && year && !isNaN(year))
            {
                const book={title,author,year,id:newid(books),}
                books.push(book);
                writebooks(books);
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify(book));
            }
            else
            {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({message:"Invalid request data: A megadott adatok hiányosak"}));
            }
        });   
    }

    else if (pathname.startsWith("/books")  && req.method === "PUT")
    {
        const index=Number(pathname.split("/")[2]);
        const book=books.find((item)=>item.id==index);
        let body = "";
        req.on("data", (chunck) => (body += chunck));
        req.on("end",()=>{
        const {title,author,year} = JSON.parse(body); 
        if (title) {book.title=title;}
        if (author) {book.author=author;}
        if (year) {book.year=year;}   
        const i=(books.indexOf(book));
         books[i]=book;
        writebooks(books);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(book));
        });
    }
    else if (pathname.startsWith("/books")  && req.method === "DELETE")
    {
        const index=Number(pathname.split("/")[2]);
        const i=books.findIndex((item)=>item.id==index);
        if(i==-1){
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify("Book not found, A megadott könyv nem található"));
        }
        else 
        {
            books.splice(i,1);
            writebooks(books);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify("Book deleted. a könyv törölve"));
        }
    }
    
    else 
    {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "A kérés nem értelmezhető" }));
    }
}

const server = http.createServer(requestLisener);

server.listen(port, host, () => {
  console.log(`Book Server is running on http://${host}:${port}`);
});

function newid(books)
{
    const id= books.reduce((max,item)=>(item.id>max ? item.id:max),books[0].id);
    return id+1;
}


import express, { query } from "express";
import fs from "fs";

const app = express();
const PORT=8000;
const moviRouter= express.Router();
function readMovies()
{
    const data = fs.readFileSync("./movies.json");
    return JSON.parse(data);
}

function writeMovies(movies)
{
    fs.writeFileSync("./movies.json",JSON.stringify(movies));
}

app.get("/movies", (req,res)=>{
    const movies=readMovies();
    res.json(movies);
});

app.get("/movies/filter",(req,res)=>{
    const {minRating,maxRating}=req.query;
    if(minRating && maxRating)
    {
        const movies=readMovies().filter((movie)=>(movie.imdb_rating>=minRating && movie.imdb_rating<=maxRating));
        res.json(movies);
    }
    else{
        res.status(400).send("Hibás szűrési paraméter");
    }
});

app.get("/movies/:id", (req,res)=>{
    const movies=readMovies();
    const index=Number(req.params.id);
    if(index>=0 && index<movies.length)
    {
        res.json(movies[index]);
    }  
    else
    {
        res.status(404).json({error:"a film nem található"});
    }   
});

app.use(express.json());

app.post("/add-movie",(req,res)=>{
    if(req.body)
    {
    const {title,director,year,imdb_rating}=req.body;
    if(title && director && year && imdb_rating)
    {
        const movies=readMovies();
        const movie={title,director,year,imdb_rating};
        movies.push(movie);
        writeMovies(movies);
        res.json(movies);
    }
    else{
        res.status(400).json({error:"hibás adat érkezett"});
    }
}
else  res.status(400).json({error:"Nincs adat"});
});

app.get("/search",(req,res)=>{
    const {title}=req.query;
    if(title)
    {
        const movies=readMovies().filter((movie)=>movie.title.includes(title));
        res.json(movies);
    }
    else 
    {
        res.status(400).json({message:"Hibás paraméter"});
    }
});

app.delete("/movies/:id",(req,res)=>{
    const id=req.params.id;
    const movies=readMovies();
    if((id) && id>=0 && id< movies.length)
    {
            movies.splice(id,1);
            writeMovies(movies);
            res.send("A "+id+" id-jú film törölve");
    }
    else
    {
        res.status(404).send("Hibás id-jú kérés, vagy a film nem található");
    }
});

app.use((req,res)=>{ res.status(400).json({ error: "Nem értem a kérést" });});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });


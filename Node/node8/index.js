import express from "express";
import pg from "pg";
import dotenv from "dotenv";

const PORT=8000;
const app=express();
const { Pool } = pg;
dotenv.config();

const pool=new Pool(  {user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,});

    app.use(express.json());

app.get("/users",async(req,res)=>{
    const {name,email,short, order}= req.query;
    let sql="";
    if(name || email) sql=" WHERE ";
    if(name) {
        sql+="name LIKE '%"+name+"%'";
        if(email) sql+=" AND ";
    }
    if(email) sql+="email = '"+email+"'";

    if(short)
    {
        if(short=="name" || short=="created_at")
        {
            sql+=" ORDER BY "+short;
            if (order && (order.toLowerCase()=="asc" || order.toLowerCase()=="desc"  ))
                sql+=(" "+order)
        }
        else res.status(403).send("Order name is illegal in short parameter");
    }
    //console.log(sql);
    try{
        const result=await pool.query("SELECT id, name, email FROM users"+sql+";");
        res.json(result.rows);
    }
    catch(error){console. log("SQL Error:",error.message);
        res.status(500).send("Server error!");
    }
});



app.post("/users",async(req,res)=>{
    if(req.body && req.body.name && req.body.email)
    {
        try{
        const result=await pool.query("INSERT INTO users (name,email) VALUES($1,$2) RETURNING *;",[req.body.name,req.body.email]);
        res.status(201).send(result.rows[0]);
    }
        catch(error)
        {
            console.log("SQL hiba 2",error.message);
            res.status(500).send("server error")
        }
    }
    else res.status(403).send("bad contend or missing data");
});

const validUser=async(id)=>{
    try{
    const result=await pool.query("SELECT * FROM users WHERE id=$1",[id]);
        if (result.rowCount==1) return true;
        else return false;
    }
    catch(error)
    {
        console.log("sql hiba a user szűrésnél: ", error.message);
        return false;
    }
}

const validGetUserId=async(req,res,next)=>{
    const userid=req.query.user_id;
    if(userid) {
        if(validUser(userid)) next();
        else res.status(404).send("User not Found");
    }
    else res.status(403).send("ERROR: user_id not specified");
}

app.post("/posts",async (req,res)=>{
    const {user_id, title, content} = req.body;
    if(user_id && title && content && title.length>0)
    {
        if(validUser(user_id))
        {
            try{
                const result= await pool.query("INSERT INTO posts (user_id, title,content) VALUES($1,$2,$3) RETURNING *;",[user_id,title,content]);
                res.send(result.rows[0]);
            }
            catch(error){
                console.log("sql hiba 3: ",error.message);
                res.status(500).send("server error");
            }
            

        }
        else res.status(404).send("User not Found");
    }
    else res.status(403).send("Bad Syntax of contend");
});

app.get("/posts",validGetUserId, async(req,res)=>{
    const id=req.query.user_id;
    let sql="";
    const {title,sort,order}=req.query;
    if(title) {
        sql+=" AND title LIKE '%"+title+"%'";
    }
    if(sort) {
        if(sort=="title" || sort=="created_at")  {
            sql+=" ORDER BY "+sort;
            if(order && (order.toLowerCase()=="asc" || order.toLowerCase()=="desc"))
                sql+=" "+order;
        }
    }
    try{
        const result=await pool.query("SELECT title, content, created_at FROM posts WHERE user_id=$1"+sql+";",[id]);
        res.json(result.rows);
    }
    catch(error) {
        console.log(" SQL hiba posts lekérdezésekor ", error.message);
        res.status(500).send("Server error")
    }
});
const validPostId=async(id)=>{
    try{
        const result=await pool.query("SELECT * FROM posts WHERE id=$1",[id]);
            if (result.rowCount>0) return true;
            else return false;
        }
        catch(error)
        {
            console.log("sql hiba a post id keresésben ", error.message);
            return false;
        }
}


app.post("/comments",async(req,res)=>{
    if(req.body && req.body.user_id && req.body.post_id && req.body.comment)
    {
        const{user_id,post_id,comment}= req.body;
        if(validUser(user_id) && validPostId(post_id))
        {
            try{
                const answer=await pool.query("INSERT INTO comments (user_id,post_id,comment) VALUES($1,$2,$3) RETURNING *;",[user_id,post_id,comment]);
                res.status(201).json(answer.rows[0]);
            }
            catch(error)
            {
                console.log("SQL hiba történt posts rögzítésekor: ",error.message);
                res.status(500).send("server error comments");
            }
        }
    }

});

app.get("/posts/:postId/comments",async(req,res)=>{
    const postId=Number(req.params.postId);
    let sql="";
    const {comment,sort,order}=req.query
    if(comment)
    {
        sql+=" AND comment LIKE '%"+comment+"%'";
    }

    if(sort && (sort=="created_at" || sort=="user_id"))
    {
        sql+=" ORDER BY "+sort;
        if (order && (order.toLowerCase()=="asc" || order.toLowerCase()=="desc"))
            sql+=" "+order;
    }

    try{
        const result=await pool.query("SELECT user_id, comment, created_at FROM comments WHERE post_id=$1"+sql+";",[postId]);
        res.json(result.rows);
    }
    catch(error)
    {
        console.log("SQL hiba történt comment lekérdezésben ",error.message);
        res.status(500).send("Server error");
    }
});

app.get("/search/posts",async(req,res)=>{
    const{search,sort,order} = req.query;
    if (search) 
    {;
        let search1="%"+search+"%";
        let sql="";
        if(sort && (sort=="created_at" || sort=="title")){
             sql+=" ORDER BY "+sort;
            if (order && order.toLowerCase()=="desc") sql+=" "+order;
        }
        
        try{
        const result=await pool.query("SELECT title, content, created_at FROM posts WHERE title LIKE $1"+sql+";",[search1]);
        res.json(result.rows);
        }
        catch(error)
        {
            console.log("SQL hiba searc post lekérdezésnél:"+error.message);
            res.status(500).send("server error");
        }
    }
    else res.status(403).send("bad request: search parameter is composory");
});

app.use((req,res)=>{
    res.status(404).send("No endpoint detected");
})

app.listen(PORT, () => {
    console.log(`Server is running:  http://localhost:${PORT}`);
  });



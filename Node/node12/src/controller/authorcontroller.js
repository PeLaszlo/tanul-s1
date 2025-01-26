import authorservice from "../services/authorService.js"

async function getUsers(req,res,next)
{
    try{
        const authors=await authorservice.getAll()
        res.json(authors);
    }
    catch(error) { next(error);}
}

async function createUser(req,res)
{
    const {name,email}=req.body
    if(name && email) {
        try{
        const author=await authorservice.create(name,email);
        res.json(author);
    }
    catch(error) { next(error);}
    }
    else res.status(400).send("data is missing");
}

export default {getUsers,createUser}
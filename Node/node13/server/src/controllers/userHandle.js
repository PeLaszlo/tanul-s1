import service from "../services/services.js";

async function userList(req,res)
{
    try{
        const users=await service.userList();
    res.json(users);
    }
    catch(error)
    {
        res.status(400).send("server error: "+error.message)
    }
    
}

async function getUserByEmail(req,res)
{
   const email=req.query.email;
   if(email) { 
        try
        {
            const id=await service.getUserIdByEmail(email);
            if (!id) throw new Error("Email adress is not found");
            const user=await service.getUserById(id);
            res.json(user);
        }
        catch(error)
        {
            res.status(400).send("error: "+error.message)
        }
   }
}

async function createUser(req,res)
{
    let {name,email,password,role}=req.body;
    if(email && password)
    {
        if(!role ) {role="Reader"};
        if(((role=="Admin" || role=="Author")&& req.user && req.user.role=="Admin" )||role=="Reader")
        {
            const user=await service.createUser(name,email,password,role);
            res.json(user);
        }
        else
        {
            res.status(401).send("Admin level is required");
        }
    }
    else 
    {
        res.status(401).send("email ans password are required!");
    }

}

async function updateUser(req,res)
{
    if(req.user && req.user.role=="Admin")
    {
        if (req.body && req.body.id)
        {
            const id= await service.getUserById(req.body.id);
            if(id) {
                const targetUser= await service.userUpdate(req.body);
                res.json(targetUser);
            }
            else res.status(404).send("User not found");
        }
        else res.status(400).send("Data is missing or not enough");     
    }
    else res.status(401).send("Admin role is missing");
}

export default {userList,createUser,getUserByEmail,updateUser};
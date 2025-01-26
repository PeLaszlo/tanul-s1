import service from "../services/services.js";

async function login(req,res)
{
    console.log("userlogin: ",req.user);
    if(!req.user)
    {
        const {email,password}=req.body;
        if(email && password)
        {
            const token=await service.login(email,password);
            if (token!=null)
            {
                res.json(token);
                console.log("toke: ",token);
            }
            else res.status(403).send("autenticate error");

        }
        else res.status(400).send("Bad utenticate request");
    }
    else res.send("Logined User already exist!");
}
export default {login}
import prisma from "../utilitis/prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



async function userList()
{
    return await prisma.user.findMany();
}

async function getUserIdByEmail(email)
{
    let id=null;
    
    try{
        const answer=await prisma.user.findUnique({
        where:{email},   
    });
    id= answer ? answer.id: null;
    }
    catch(error)
    {console.log(error.message);}
    return id; 
}

async function createUser(name,email,password,role)
{
    if (await getUserIdByEmail(email)==null)
    {
        const hashedPassword = await bcrypt.hash(password,5); 
        const user= await prisma.user.create({
        data:{name,email,role,password:hashedPassword},
        });
        return user;
    }
    else{ 
        console.log("email hiba ág");
        return {error:"User is already exist"};
    }

}

async function getUserById(id)
{
    try{
        return await prisma.user.findUnique({
        where:{id}
    });
    }
    catch(error)
    {console.log(error.message);}
}

async function userUpdate(newData)
{
    const{email,password,role}=newData
    if (password)
    {
        const hashedPassword = await bcrypt.hash(password,5);
    }
        
    try{
        const updatedUser=await prisma.user.update({
            where:{id:newData.id},
            data:{
                email: email || undefined,
                role: role || undefined, 
                password: hashedPassword || undefined,
            }
        });

        return updatedUser;
    }
    catch(error){
        console.log("hibás update kisérlet");
        return {error:"Server error"}
    }
}

async function login(email,password)
{   

    try{
        const enter=await prisma.user.findUnique({
        where:{email}
    });
    if (enter){
        const isPasswordValid = await bcrypt.compare(password, enter.password);
        if(isPasswordValid)
        {
            const payload={
                id:enter.id,
                name:enter.name,
                email:enter.email,
                role:enter.role
            };
            const JWT_SECRET=process.env.JWT_SECRET;
            return jwt.sign(payload, JWT_SECRET);
        }
        else return null;
    }
    
}
catch(error)
{
    console.log("Hiba a autentikáció feldolgozáséban",error.message);
    return null;
}
}

export default{userList, getUserIdByEmail,getUserById,createUser,userUpdate,login};

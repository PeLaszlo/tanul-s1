import express from "express";
import {PrismaClient} from "@prisma/client";

const PORT=8000;
const app=express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/project-details/:projectId",async(req,res)=>{
    const projectId=req.params.projectId;
    try{
    const project=await prisma.projectDetail.findUnique({
        where: {id:projectId},
        include:{
            project:{
                include:
                {
                    tasks:{select: {title:true,completed:true}},
                    projectUsers:{include:{
                        user:{select:{name:true,email:true}}
                    }
                },
                }
            },
        }
        
    });
    res.json(project);
}
catch(error)
{
    res.status(500).send(error);
}
});

app.post("/project-details/:Id",async(req,res)=>{
    const Id=req.params.Id;
    const {budget,deadline,status,projectId}=req.body;
    if( budget && deadline && status && projectId)
    {
        await prisma.projectDetail.delete(
            { where: { id:Id },}
        );
        const projectdetail=await prisma.projectDetail.create({
            data:{
                projectId,
                budget,
                deadline,
                status},
            include:{project:true},
        });
        res.json(projectdetail);
    }
    else res.status(403).send("data error ");
});

app.put("/project-details/:projectId",async(req,res)=>{
    const projectId=req.params.projectId;
    const {budget,deadline,status}=req.body;
    try{
        const project=await prisma.projectDetail.update({
            where:{projectId,},
            data:{budget:budget ? budget:undefined,
                deadline:deadline ? deadline: undefined,
                status:status ? status: undefined,           
            },
        });
        res.json(project);
    }
    catch(error)
    {res.status(500).send(error);}
    
});

app.delete("/project-details/:projectId",async(req,res)=>{
    const projectId=req.params.projectId;
    try {
        await prisma.projectDetail.delete(
        { where: { projectId,},}
        );
        res.status(201).send("projectdetail is deleted");
    }
    catch(error)
        {res.status(500).send(error);}
});


app.get("/projects",async(req,res)=>{
    try{
        const projects=await prisma.project.findMany();
        res.json(projects);
    }
    catch(error)
    {
        res.sendStatus(500).send(error);
    }
});

app.use(async(req,res)=>{
    res.status(404).send("No endpoint  detected");
});

app.listen(PORT, ()=>{console.log(`Server is running on localhost: ${PORT}`);});
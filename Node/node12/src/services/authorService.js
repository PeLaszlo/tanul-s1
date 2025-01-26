import {prisma} from "./prismaClient.js";

async function getAll()
{
    return await prisma.author.findMany()
}
async function create(name,email)
{
    return await prisma.author.create({
        data: {name,email}
    });
}

export default {getAll,create};
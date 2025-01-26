import express from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET=process.env.JWT_SECRET;

export default function autenticate(req,res,next)
{
    const token= req.headers.authorization?.split(" ")[1];
   
    if(token && token!= "undefined")
    {
        req.user=jwt.verify(token, JWT_SECRET);
       
    }
    next();
}

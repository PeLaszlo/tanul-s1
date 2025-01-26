import express from "express";
import userHandle from "../controllers/userHandle.js";

const router=express.Router();

router.get("/email",userHandle.getUserByEmail);
router.get("/",userHandle.userList);
router.post("/",userHandle.createUser);


export default router;
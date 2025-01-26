import express from "express";
import authorController from "../controller/authorcontroller.js";

const router = express.Router();

router.use(express.json());

router.get("/", authorController.getUsers);

router.post("/", authorController.createUser);

export default router;
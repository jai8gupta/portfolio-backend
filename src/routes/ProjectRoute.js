import express from "express"
import { ProjectModel } from "../models/Project.js";
import mongoose from "mongoose";
const router = express.Router();

router.get("/", async(req, res) => {
    const projects = await ProjectModel.find();
    res.json(projects);
})


export {router as ProjectRouter}
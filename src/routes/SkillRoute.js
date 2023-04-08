import mongoose from "mongoose";
import express from "express"
import { SkillModel } from "../models/Skills.js";

const router = express.Router();

router.get("/", async (req, res)=> {
    const skills = await SkillModel.find();
    if (skills) {
        res.json(skills)
    }
    res.status(404);
})


export {router as SkillRouter};
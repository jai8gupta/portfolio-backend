import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    language: {type: String, required: true, unique: true},
    logo: {type: String, required: true},
    profieciency: {type: String, required: true},
})

export const SkillModel = mongoose.model("skills", SkillSchema);
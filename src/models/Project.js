import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    Heading : {type: String, required: true, unique: true},
    Description : {type: String, required: true},
    Image : {type: String, required: true}
})

export const ProjectModel = mongoose.model("CaseStudies", ProjectSchema);


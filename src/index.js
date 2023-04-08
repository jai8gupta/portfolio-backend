import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {ProjectRouter} from "./routes/ProjectRoute.js"
import { SkillRouter } from "./routes/SkillRoute.js";
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://jai8gupta:TG0WnBXYq2VlbQA0@cluster0.avvfc6i.mongodb.net/MyCaseStudies?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const port = 3001;

app.use("/projects",ProjectRouter)
app.use("/skills", SkillRouter)

app.listen(port, ()=>{
    console.log("Server Started at "+port);
})
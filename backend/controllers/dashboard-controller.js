const bcrypt = require('bcrypt');
const Project = require('../models/projectSchema.js');


const projectDetail = async (req , res) => {
    try {
        let projects = await Project.find();
        console.log(projects);
        if (projects.length > 0) {
            console.log(projects);
            let modifiedProjects = projects.map((project) => {
                return { ...project._doc};
            });
            res.send(modifiedProjects);
        } else {
            res.send({ message: "No Project found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const saveProject = async (req, res) => {
    console.log(req);
    console.log(res);
    try {
        const project = new Project({
            ...req.body
        });
        let result = await project.save();
            res.send(result);
       
    } catch (err) {
        res.status(500).json(err);
    }
};



module.exports = {  saveProject, projectDetail };

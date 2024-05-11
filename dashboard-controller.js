const bcrypt = require('bcrypt');
// const Admin = require('../models/adminSchema.js');
const Project = require('../models/projectSchema.js');
// const Student = require('../models/studentSchema.js');
// const Teacher = require('../models/teacherSchema.js');
// const Subject = require('../models/subjectSchema.js');
// const Notice = require('../models/noticeSchema.js');
// const Complain = require('../models/complainSchema.js');

// const adminLogIn = async (req, res) => {
//     if (req.body.email && req.body.password) {
//         let admin = await Admin.findOne({ email: req.body.email });
//         if (admin) {
//             const validated = await bcrypt.compare(req.body.password, admin.password);
//             if (validated) {
//                 admin.password = undefined;
//                 res.send(admin);
//             } else {
//                 res.send({ message: "Invalid password" });
//             }
//         } else {
//             res.send({ message: "User not found" });
//         }
//     } else {
//         res.send({ message: "Email and password are required" });
//     }
// };


 // const existingAdminByEmail = await Admin.findOne({ email: req.body.email });
        // const existingSchool = await Admin.findOne({ schoolName: req.body.schoolName });

        // if (existingAdminByEmail) {
        //     res.send({ message: 'Email already exists' });
        // }
        // else if (existingSchool) {
        //     res.send({ message: 'School name already exists' });
        // }
        // else {
            
        // }

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

const adminLogIn = async (req, res) => {
    if (req.body.email && req.body.password) {
        let admin = await Admin.findOne({ email: req.body.email });
        if (admin) {
            if (req.body.password === admin.password) {
                admin.password = undefined;
                res.send(admin);
            } else {
                res.send({ message: "Invalid password" });
            }
        } else {
            res.send({ message: "User not found" });
        }
    } else {
        res.send({ message: "Email and password are required" });
    }
};

// const getAdminDetail = async (req, res) => {
//     try {
//         let admin = await Admin.findById(req.params.id);
//         if (admin) {
//             admin.password = undefined;
//             res.send(admin);
//         }
//         else {
//             res.send({ message: "No admin found" });
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }

// const deleteAdmin = async (req, res) => {
//     try {
//         const result = await Admin.findByIdAndDelete(req.params.id)

//         await Sclass.deleteMany({ school: req.params.id });
//         await Student.deleteMany({ school: req.params.id });
//         await Teacher.deleteMany({ school: req.params.id });
//         await Subject.deleteMany({ school: req.params.id });
//         await Notice.deleteMany({ school: req.params.id });
//         await Complain.deleteMany({ school: req.params.id });

//         res.send(result)
//     } catch (error) {
//         res.status(500).json(err);
//     }
// }



module.exports = {  saveProject, projectDetail };

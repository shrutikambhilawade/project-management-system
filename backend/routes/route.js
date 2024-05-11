const router = require('express').Router();
const { projectDetail, saveProject } = require('../controllers/dashboard-controller.js');



// Admin
// router.post('/AdminReg', adminRegister);
// router.post('/AdminLogin', adminLogIn);
router.get('/Project', projectDetail);
router.post('/ProjectCreate',saveProject);

module.exports = router;
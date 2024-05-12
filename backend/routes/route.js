const router = require('express').Router();
const { projectDetail, saveProject } = require('../controllers/dashboard-controller.js');


router.get('/Project', projectDetail);
router.post('/ProjectCreate',saveProject);

module.exports = router;
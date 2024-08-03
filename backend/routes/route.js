const express = require('express');
const {addjob, getjobs, deleteJob, updateJob} = require('../controllers/control');
const router = express.Router();

// add user
router.post('/addjob', addjob);

// get
router.get('/getjobs',getjobs);

// delete
router.delete('/deletejob/:id',deleteJob);

// update
router.put('/editjob/:id',updateJob);

module.exports= router;
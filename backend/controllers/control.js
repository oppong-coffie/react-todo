const jobModel = require('../models/job_model');

// ADD USER
const addjob = async (req, res) => {
    // Extract fields from req.body
    const {job} = req.body;
    
    try {
      // Create a new job
      const jobsent = await jobModel.create({
        job: job,
        status: "pending"
      });
  
      // Send success response
      res.status(200).json(jobsent);
    } catch (error) {
      // Send error response
      res.status(400).json({ error: error.message });
    }
  };

  // GET ALL JOBS
  const getjobs = async (req, res) => {
    try {
        // Retrieve all jobs from the database
        const jobs = await jobModel.find();
        
        // Send a successful response with the jobs data
        res.status(200).json(jobs);
    } catch (error) {
        // Log the error for debugging
        console.error("Error fetching jobs:", error.message);

        // Send an error response with a 500 status code
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// // PUT /editjob/:id
const updateJob = async (req, res) => {
  try {
      const { id } = req.params;
      const { job } = req.body; // Expect job in the request body

      const updatedJob = await jobModel.findByIdAndUpdate(id, { job }, { new: true });

      if (!updatedJob) {
          return res.status(404).json({ message: 'Job not found' });
      }

      res.status(200).json(updatedJob);
  } catch (error) {
      console.error("Error updating job:", error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

// DELETE JOB BY id
const deleteJob = async (req, res) => {
  try {
      const { id } = req.params;
      await jobModel.findByIdAndDelete(id);
      res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
      console.error("Error deleting job:", error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports={addjob, getjobs, deleteJob, updateJob};
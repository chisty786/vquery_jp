/*
 * Dao for entity : job
 */

var models = require('../models/models.js');

module.exports = {

    /* Save the job to database */
    saveJob : function(job, callback) {

        job.save(function (err) {
            if (err) {
                callback("fail");
                return handleError(err);
            } else {
                callback("success");
            }
        });
    },
    
    /* Find the job associated with given job id  */
    getJob : function(job_code, callback) {

        models.Job.findById(job_code, function (err, job) {
            callback(job);
        });
    },
    
    getAllJobs : function(job_code, callback) {

        models.job.find({job_code : job_code}, function (err, job) {
            if (err) {
                console.log(err);
            }
            callback(job);
        });
    },
   
    
    /*  Delete the company associated with the job id  */
    deleteJob : function(job_code, callback){

        models.Job.findByIdAndRemove(job_code, function(err, modelDeleted) {
            if (err) {
                callback("fail");
            } else
                callback("success");    
        });
    },

   

    /* Find a job by its jobId */
    findByJobId : function(job_code, callback) {

        models.Job.findOne({'job_code' : job_code}, function(err, job) {
            if (err) {
                console.log(err);
            } else if (job) {
                console.log("Job found");
                callback(job);
            } else {
                console.log("Job not found");
                callback(null);
            }
        });
    }
};


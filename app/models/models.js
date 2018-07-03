/*
 * Define all the entities(models) to be used in the application
 */

// Grab the required modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

/* Mongoose schema for Employee */
var EmployeeSchema = new Schema({
    first_name : String,
    last_name : String,
    emp_id : String,
    email : String,
    contact_no : String,
    ref_no : String,
    user_id_f : String
});




/* Mongoose schema for UserProfile */
var UserProfileSchema = new Schema({
    user_type : String,
	role : String,
	user_id : {type : String, default: ''}
});



/* Mongoose schema for job */
var JobSchema = new Schema({
	job_code : String,
    job_desc : String,
    job_title : String,
    job_Category : String,
    job_location : String,
    job_created_date : Date,
    skillSet : String,
    job_type : String,
    job_reg : String,
    job_status : String,
    job_applying_date : { type: Date, default: Date.now }
});

/* Mongoose schema for candidateInfo */
var CandidateInfoSchema = new Schema({
	firstname : String,
    lastname : String,
    dob : Date,
    candiate_id : String,
    address : String,
    email : Date,
    contact_no : String,
    candidate_location : String,
    candiate_profile_id : String,
    user_id : String,
    job_applying_date : { type: Date, default: Date.now }
});

/* Mongoose schema for candidateProfile */
var CandidateProfileSchema = new Schema({
	qualification : String,
    past_experience : String,
    candidate_name : Date,
    candiate_id : String,
    address : String,
    email : Date,
    contact_no : String,
    candidate_location : String,
    candidate_profile_id : String,
    skillset : String
    
});







module.exports = {
    Employee : mongoose.model('Employee', EmployeeSchema),
    UserProfile : mongoose.model('UserProfile', UserProfileSchema),    
    Job : mongoose.model('Job', JobSchema),
    candidate_info : mongoose.model('candidate_info', CandidateInfoSchema),    
    candidate_profile : mongoose.model('candidate_profile', CandidateProfileSchema), 
    
}

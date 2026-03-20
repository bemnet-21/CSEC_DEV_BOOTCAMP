import mongoose, { Schema } from "mongoose";

const Jobs = new Schema({
    company_logo: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    },
    tags:{
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    detail_desc: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    job_type: {
        type: String,
        required: true
    },
    applicants: {
        type: Number
    },
    responsibilities: {
        type: [String],
        required: true
    },
    ratings: [Number],

})

export default mongoose.model('Jobs', Jobs)
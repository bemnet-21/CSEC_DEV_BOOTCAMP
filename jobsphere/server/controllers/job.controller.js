import { addJob, getJob, getJobs } from "../services/job.service.js"
import serverError from "../utils/serverErrorMessage.js"

export const addNewJob = async (req, res) => {
    const { company_logo, company_name, job_title, tags, description, detail_desc, location, experience, job_type, responsibilities, numberOfApplicants } = req.body
    if(!company_logo || !company_name || !job_title || !tags || !description || !detail_desc || !location || !experience || !job_type || !responsibilities || !numberOfApplicants) return res.status(400).json({ message : "Missing required fields" })

    try {
        const job = await addJob(req.body)
        res.status(201).json({
            message : "Job added successfully",
            data: job
        })
    } catch(err) {
        serverError(res, err)
    }
}

export const getAllJobs = async (req, res) => {
    try {
        const jobs = await getJobs()
        res.status(200).json({
            message : "Jobs fetched successfully",
            data: jobs
        })
    } catch(err) {
        serverError(res, err)
    }
}

export const getJobById = async (req, res) => {
    const { id } = req.params
    try {
        const job = await getJob(id)
        res.status(200).json({
            message : "Job fetched successfully",
            data: job
        })
    } catch(err) {
        serverError(res, err)
    } 
}

import { addJob } from "../services/job.service.js"
import serverError from "../utils/serverErrorMessage.js"

export const addNewJob = async (req, res) => {
    const { company_logo, company_name, job_title, tags, description, detail_desc, location, experience, job_type, responsibilities } = req.body
    if(!company_logo || !company_name || !job_title || !tags || !description || !detail_desc || !location || !experience || !job_type || !responsibilities) return res.status(400).json({ message : "Missing required fields" })

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
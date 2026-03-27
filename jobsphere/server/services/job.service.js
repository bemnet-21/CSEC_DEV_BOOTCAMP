import { createJob, getAllJobs } from "../repositories/job.repository.js"
import customError from "../utils/customError.js"

export const addJob = async (job) => {
    const newJob = await createJob(job)
    if(!newJob) return customError("Failed to add job", 500)
    return newJob
}

export const getJobs = async () => {
    const jobs = await getAllJobs()
    if(!jobs) return customError("Failed to fetch jobs", 500)
    return jobs
}
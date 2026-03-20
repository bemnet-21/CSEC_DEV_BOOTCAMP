import { createJob } from "../repositories/job.repository.js"
import customError from "../utils/customError.js"

export const addJob = async (job) => {
    const newJob = await createJob(job)
    if(!newJob) return customError("Failed to add job", 500)
    return newJob
}
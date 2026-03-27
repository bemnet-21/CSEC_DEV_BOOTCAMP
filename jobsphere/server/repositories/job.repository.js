import Jobs from "../models/Job.js"


export const createJob = async (job) => {
    const newJob = await Jobs.create(job)
    return newJob
}

export const getAllJobs = async () => {
    const jobs = await Jobs.find({})
    return jobs
}

export const getJobById = async (id) => {
    const job = await Jobs.findById(id)
    return job
}   
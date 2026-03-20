import Jobs from "../models/Job.js"


export const createJob = async (job) => {
    const newJob = await Jobs.create(job)
    return newJob
}
import type { AddJobFormData } from "../interface"
import api from "./api"

export const getAllJobs = async () => {
    return api.get('/jobs')
}

export const createJob = async (jobData: AddJobFormData) => {
    return api.post('/jobs', jobData)
}

export const getJob = async (id: string) => {
    return api.get(`/jobs/${id}`)
}
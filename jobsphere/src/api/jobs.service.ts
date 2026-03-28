import api from "./api"

export const getAllJobs = async () => {
    return api.get('/jobs')
}
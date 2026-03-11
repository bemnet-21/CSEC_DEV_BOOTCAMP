import { JOBS } from "../constants"
import type { JobCardProps } from "../interface"

const jobs: JobCardProps[] = JOBS
export const getJob = (id: string) => {
    return jobs.find((job) => job.id === id)
}
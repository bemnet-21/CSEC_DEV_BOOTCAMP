export interface MenuModalProps {
    isOpen: boolean
    onClose: () => void
}

export interface JobCardProps {
    id: string
    company_logo: string
    company_name: string
    job_title: string
    tags: string[]
    description: string
    detail_desc: string
    rating: number
    applicants: number
    responsibilites: string[]
    location: string
    experience: string
    job_type:string
}

export interface SavedJobCardProps {
    id: string
    company_logo: string
    company_name: string
    job_title: string
    tags: string[]
}

export interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    username: string
    role: string
}

export interface LoginInterface {
    message: string,
    user: User,
    token: string
}
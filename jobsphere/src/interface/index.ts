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
}
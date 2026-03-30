export interface MenuModalProps {
    isOpen: boolean
    onClose: () => void
}

export interface JobCardProps {
    _id: string
    company_logo: string
    company_name: string
    job_title: string
    tags: string[]
    description: string
    detail_desc: string
    rating: number
    applicants: number
    responsibilities: string[]
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

export interface AuthState {
  token: string | null;
  user: User | null; 
  isAuthenticated: boolean;
}

export interface LoginInterface {
    message: string,
    user: User,
    token: string
}

export interface ProtectedRouteProps {
  isAuthenticated: boolean;
}

export interface AddJobFormData {
    company_name: string
    job_title: string
    location: string
    experience: string
    job_type: string
    description: string
    responsibilities: string[]
    company_logo: string
    tags: string[]
    detail_desc: string
}
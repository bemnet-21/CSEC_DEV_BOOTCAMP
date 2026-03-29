import api from "./api"

export const login = async (username: string, password: string) => {
    return api.post("/auth/login", { username, password })
}

export const signup = async (firstName: string, lastName: string, email: string, username: string, password: string, role: string) => {
    return api.post("/auth/signup", { firstName, lastName, email, username, password, role })
}
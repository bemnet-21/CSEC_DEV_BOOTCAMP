import api from "./api"

export const login = async (username: string, password: string) => {
    return api.post("/auth/login", { username, password })
}

export const signup = async (name: string, email: string, password: string) => {
    return api.post("/auth/signup", { name, email, password })
}
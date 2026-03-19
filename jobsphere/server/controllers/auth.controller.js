import { loginUser, registerUser } from "../services/auth.service.js"
import serverError from "../utils/serverErrorMessage.js"

export const signup = async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body
    if(!firstName || !lastName || !username || !email || !password) return res.status(400).json({ message : "Missing required fields" })

    try {
        const { user, token } = await registerUser(req.body)
        res.status(201).json({
            message : "User created successfully",
            user,
            token
        })

    } catch(err) {
        serverError(res, err)
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body
    if(!username || !password) return res.status(400).json({ message : "Missing required fields" })

    try {
        const { user, token } = await loginUser(req.body)

        res.status(200).json({ 
            message : "Logged in successfully",
            user,
            token
         })
    } catch(err) {
        serverError(res, err)
    }
}
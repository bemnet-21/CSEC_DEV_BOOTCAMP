import { registerUser } from "../services/auth.service.js"

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
        const message = err.message || "Internal server error"
        const status = err.statusCode || 500
        console.error(err)
        res.status(status).json({ message })
    }
}
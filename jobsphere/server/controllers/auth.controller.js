import { loginUser, registerUser } from "../services/auth.service.js"
import serverError from "../utils/serverErrorMessage.js"

export const signup = async (req, res) => {
    const { firstName, lastName, username, email, password, role } = req.body
    if(!firstName || !lastName || !username || !email || !password || !role) return res.status(400).json({ message : "Missing required fields" })

    try {
        const { user, token } = await registerUser(req.body)
        const userObj = user.toObject()
        delete userObj.password
        res.status(201).json({
            message : "User created successfully",
            user: userObj,
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

        const userObj = user.toObject()
        delete userObj.password
        res.status(200).json({ 
            message : "Logged in successfully",
            user: userObj,
            token
         })
    } catch(err) {
        serverError(res, err)
    }
}
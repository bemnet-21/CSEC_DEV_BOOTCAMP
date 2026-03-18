import { createUser, findByUsername } from "../repositories/user.repository.js"
import bcrypt from 'bcrypt'
import generateToken from "../utils/generateToken.js"

export const registerUser = async (data) => {
    const existingUser = await findByUsername(data.username)
    if(existingUser) {
        const error = new Error("User already exists")
        error.statusCode = 409
        throw error
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)
    const newUser = await createUser({
        ...data,
        password: hashedPassword
    })
    const token = generateToken(newUser)

    return { user: newUser, token }
}
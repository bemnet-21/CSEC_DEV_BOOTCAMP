import { createUser, findByUsername } from "../repositories/user.repository.js"
import bcrypt from 'bcrypt'
import generateToken from "../utils/generateToken.js"
import customError from "../utils/customError.js"

export const registerUser = async (data) => {
    const existingUser = await findByUsername(data.username)
    if(existingUser) {
        customError("User already exists", 409)

    }

    const hashedPassword = await bcrypt.hash(data.password, 10)
    const newUser = await createUser({
        ...data,
        password: hashedPassword
    })
    const token = generateToken(newUser)

    return { user: newUser, token }
}

export const loginUser = async (loginData) => {
    const user = await findByUsername(loginData.username)
    if(!user) {
        customError("Invalid credentials", 401)
    }
    const isValid = await bcrypt.compare(loginData.password, user.password)

    if(!isValid) {
        customError("Invalid credentials", 401)
    }
    const token = generateToken(user)

    return { user, token }
}
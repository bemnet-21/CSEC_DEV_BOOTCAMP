import User from "../models/User.js"

export const createUser = async (data) => {
    try {
        const user = await User.create(data)
        return user
    } catch(err) {
        throw err
    }
}

export const findByUsername = async (username) => {
    try {
        const user = await User.findOne({ username })
        return user
    } catch(err) {
        throw err
    }
}
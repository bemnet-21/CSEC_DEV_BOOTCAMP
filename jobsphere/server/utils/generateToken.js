import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'


dotenv.config()

const generateToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
    }
    const secret = process.env.JWT_SECRET
    const expiresIn = process.env.JWT_EXPIRES
    return jwt.sign(payload, secret, { expiresIn: expiresIn })
}

export default generateToken
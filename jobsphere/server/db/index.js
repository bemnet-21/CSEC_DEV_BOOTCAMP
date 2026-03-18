import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const uri = process.env.MONGO_URI

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(uri)
        console.log(`MongoDB connected: ${conn.connection.host}` )
    } catch(err) {
        console.error(`Database connection error: ${err}`)
        process.exit(1)
    }
}

export default connectDb
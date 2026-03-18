import express from "express"
import cors from 'cors'
import connectDb from "./db/index.js"
import authRoutes from './routes/auth.routes.js'
import dotenv from 'dotenv'
dotenv.config()

await connectDb()
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`Server is listening to port 8080 ${port}`)
})

app.use('/api/v1/auth', authRoutes)
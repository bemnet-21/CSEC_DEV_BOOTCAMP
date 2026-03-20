import express from 'express'
import { addNewJob } from '../controllers/job.controller.js'
import protect from '../middleware/AuthMiddleware.js'
import authorizeRoles from '../middleware/authorizeRoles.js'

const router = express.Router()

router.post('/', protect, authorizeRoles('recruiter'), addNewJob)

export default router
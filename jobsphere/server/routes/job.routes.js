import express from 'express'
import { addNewJob, getAllJobs, getJobById } from '../controllers/job.controller.js'
import protect from '../middleware/AuthMiddleware.js'
import authorizeRoles from '../middleware/authorizeRoles.js'

const router = express.Router()

router.post('/', protect, authorizeRoles('recruiter'), addNewJob)
router.get('/', protect, getAllJobs)
router.get('/:id', protect, getJobById)

export default router
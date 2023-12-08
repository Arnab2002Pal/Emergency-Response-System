import express from "express";
import {updateDoctor,getAllDoctor,getSingleDoctor,deleteDoctor, getDoctorProfile} from '../Controllers/doctorController.js'
import { autheticate , restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js'


const router = express.Router()

//nested routes
router.use('/:doctorId/reviews', reviewRouter)


router.get('/:id',getSingleDoctor)
router.get('/',getAllDoctor)
router.put('/:id', autheticate , restrict(["doctor"]) ,updateDoctor)
router.delete('/:id', autheticate , restrict(["doctor"]) ,deleteDoctor)

router.get('/profile/me', autheticate, restrict(['doctor']), getDoctorProfile)
export default router


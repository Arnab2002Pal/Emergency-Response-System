import express from "express";
import {updateUser, deleteUser , getAllUser , getSingleUser , getUserProfile , getMyAppointments} from '../Controllers/userController.js'
import { autheticate , restrict } from "../auth/verifyToken.js";

const router = express.Router()

router.get('/:id',autheticate , restrict(["patient"]) ,  getSingleUser)
router.get('/', autheticate , restrict(["admin"]) ,getAllUser)
router.put('/:id', autheticate , restrict(["patient"]) ,updateUser)
router.delete('/:id', autheticate , restrict(["patient"]) , deleteUser)
router.get('/profile/me', autheticate , restrict(["patient"]) , getUserProfile)
router.get('/appointments/my-appointments', autheticate , restrict(["patient"]) , getMyAppointments)



export default router
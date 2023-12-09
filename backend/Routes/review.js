import express from 'express'
import { getAllReviews, createReview } from '../Controllers/reviewController.js'
import { autheticate, restrict } from '../auth/verifyToken.js'


const router = express.Router({mergeParams:true})
//mergeParams ensures that the nested routes are accessible

router.route('/').get(getAllReviews).post(autheticate, restrict(['patient']), createReview)

export default router 
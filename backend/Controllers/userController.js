import User from "../models/UserSchema.js";
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'


export const updateUser = async(req,res) => {
    const id = req.params.id
    // "params" typically refers to URL parameters or route parameters.

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body},{new: true})

        //$set is a MongoDB update operator. It is used to update specific fields within a document.

        //used to update specific fields in the document without affecting the rest of the document's fields. It takes an object as its value, where the keys are the fields you want to update, and the values are the new values you want to set for those fields.

        //{ new: true }, it means that the method will return the updated document after the update operation is performed. In other words, if you don't set this option or set it to false, the method will return the document as it was before the update, and if you set it to true, it will return the updated document.

        res.status(200).json({
            success: true,
            message:'Successfully Updated the info',
            data:updatedUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:'Failed Update',
            error: error.message,
        })
    }
}

export const deleteUser = async(req,res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message:'Successfully Deleted',
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:'Failed to delete',
            error: error.message,
        })
    }
}

export const getSingleUser = async(req,res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id).select('-password')


        res.status(200).json({
            success: true,
            message:'User Found',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:'No User Found',
            error: error.message,
        })
    }
}

export const getAllUser = async(req,res) => {

    try {
        const users = await User.find({}).select('-password')
        //{} is used if you want to retrieve all documents from a collection. It effectively acts as a query filter that selects all documents in the collection.

        res.status(200).json({
            success: true,
            message:'Users Found',
            data: users
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message:'Not Found',
            error: error.message,
        })
    }
}

export const getUserProfile = async(req,res) => {
    const userId = req.userId

    try {
        const user = await User.findById(userId)

        if(!user){
            return res.state(404).json({
                success:false,
                message:"User Not Found"
            })
        }
        const {password, ...rest} = user._doc
        res.status(202).json({
          success:true,
          message:'Profile Info is getting, ',
          data:{...rest}  
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message:'Not Found',
            error: 'Something went wrong: ' + error.message,
        })
    }
}

export const getMyAppointments = async(req,res)=> {
    try {
        //1. retrieve appointments from booking from user
        const bookings = await Booking.find({
            user:req.userId
        })


        //2. extract doctor ids from appointment booking
        const doctorIds = bookings.map(el=>el.doctor.id)

        //3. retrive doctors using doctors ids
        const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password')

        res.status(200).json({
            success: true,
            message:'Appointment are getting',
            data: doctors
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message:'Not Found',
            error: 'Something went wrong: ' + error.message,
        })
    }
}


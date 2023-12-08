import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateDoctor = async(req,res) => {
    const id = req.params.id
    // "params" typically refers to URL parameters or route parameters.

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body},{new: true})

        //$set is a MongoDB update operator. It is used to update specific fields within a document.

        //used to update specific fields in the document without affecting the rest of the document's fields. It takes an object as its value, where the keys are the fields you want to update, and the values are the new values you want to set for those fields.

        //{ new: true }, it means that the method will return the updated document after the update operation is performed. In other words, if you don't set this option or set it to false, the method will return the document as it was before the update, and if you set it to true, it will return the updated document.

        res.status(200).json({
            success: true,
            message:'Successfully Updated the info',
            data:updatedDoctor
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:'Failed Update',
            error: error.message,
        })
    }
}

export const deleteDoctor = async(req,res) => {
    const id = req.params.id

    try {
        await Doctor.findByIdAndDelete(id)

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

export const getSingleDoctor = async(req,res) => {
    const id = req.params.id

    try {
        const doctor = await Doctor.findById(id).populate("reviews").select('-password')


        res.status(200).json({
            success: true,
            message:'Doctor Found',
            data: doctor
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:'No Doctor Found',
            error: error.message,
        })
    }
}

export const getAllDoctor = async(req,res) => {


    try {

        const {query} = req.query
        let doctors;

        if(query){ //Scenario with a search query
            doctors = await Doctor.find({
                isApproved:'approved',
                $or:[{name:{$regex:query, $options: "i"}}, {specialization : {$regex:query, $options: "i"}}]
            }).select('-password')
            //$or: [...]: This is an operator in MongoDB that allows you to perform a logical OR operation on an array of conditions. It's used to find doctors where at least one of the conditions inside the array is true. 

            //{name: { $regex: query, $options: "i" }}: This condition uses a regular expression ($regex) to search for doctors whose name matches the query with the case-insensitive option ($options: "i"). It looks for doctors whose names contain the search query.

            //{specialization: { $regex: query, $options: "i" }}: Similar to the first condition, this one searches for doctors whose specialization matches the query with a case-insensitive search.

        } else{ //Scenario without a search query: retrieves all doctors with isApproved set to 'approved' without any additional filtering based on a search query. This scenario is probably used when you want to display a list of all approved doctors without any specific search criteria.
            doctors = await Doctor.find({isApproved:'approved',}).select('-password')
        }

        //{} is used if you want to retrieve all documents from a collection. It effectively acts as a query filter that selects all documents in the collection.

        res.status(200).json({
            success: true,
            message:'Doctors Found',
            data: doctors
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message:'Not Found',
            error: error.message,
        })
    }
}

export const getDoctorProfile = async(req,res)=>{
    const doctorId = req.userId

    try {
        const doctor = await Doctor.findById(doctorId)

        if(!doctor){
            return res.state(404).json({
                success:false,
                message:"Doctor Not Found"
            })
        }
        const {password, ...rest} = doctor._doc
        const appointments = await Booking.find({
            doctor:doctorId
        })

        res.status(202).json({
          success:true,
          message:'Profile Info is getting, ',
          data:{...rest , appointments}  
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message:'Not Found',
            error: 'Something went wrong: ' + error.message,
        })
    }
}
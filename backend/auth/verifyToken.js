import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'


//next: its a fucntion used to pass control to next middleware
export const autheticate = async(req,res,next) => {
    
    //get token from headers
    const authToken = req.headers.authorization

    //check token is exists
    if(!authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({
            success: false,
            message: 'No token, Authorization denied!'
        })
    }

    try {
        const token = authToken.split(" ")[1]

        //verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = decoded.id
        req.role = decoded.role

        next()
    } catch (error) {
        if(error.name == 'TokenExpiredError'){
            return res.status(401).json({
                success: false,
                message: 'Your session has expired.'
            })
        }

        return res.status(401).json({
            success: false,
            message: 'Invalid failed.'
        })
        
    }
}

export const restrict = roles => async(req,res,next) => {
    // takes an array of roles as its parameter
    // check the user role against this array and grant access or not

    const userId = req.userId

    let user;
    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)

    if (patient) {
        user = patient;
    }
    if (doctor) {
        user = doctor;
    }
    
    if(!roles.includes(user.role)){
        //checks if the user's role (obtained from the user object) is included in the roles array that was passed as a parameter to the middleware. If the user's role is not in the array, it means the user is not authorized to access the protected resource.
        return res.status(401).json({
            success: false,
            message: `You are not authorized to perform this action.`
        })
    }
    
    next();
}
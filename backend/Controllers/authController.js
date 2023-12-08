import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const generateToken = (user)=>{
    return jwt.sign({
        id:user._id, 
        role:user.role
    },process.env.JWT_SECRET_KEY, {
        expiresIn:"1d",
    })
}

export const register = async(req,res)=>{
    const {name, email, password, role, photo, gender} = req.body

    try {
        //To check if user is registering as a doc or patient so that it can work with that data model
        let user = null;
    
        if(role === 'patient'){
            user =await User.findOne({
                email
            })
        }else if(role === 'doctor'){
            user = await Doctor.findOne({
                email
            })
        }

        //check if user exist?
        if(user){
            return res.status(400).json({
                message: 'User Already Exist'
            })
        }

        //if no user is found hash the password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if(role === 'patient'){
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }

        if(role === 'doctor'){
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }     
        
        await user.save();

        res.status(200).json({
            success: true,
            message:"User Created Successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Internal server Error, Try again"
        })
    }
}


export const login = async(req,res)=>{
    const {email} = req.body;
    // expecting req.body to be an object with properties email. This structure is more typical when working with JSON data in the request body.
    try {
        let user = null;

        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})

        if(patient){
            user = patient
        }else if(doctor){
            user = doctor
        }

        //check if user exist or not
        if(!user){
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        //compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

        if(!isPasswordMatch){
            return res.status(400).json({
                status: false,
                message: "Invalid Details"
            }) 
        }

        //get token
        const token = generateToken(user)

        const {password, role, appointments, ...rest} = user._doc

        //The user._doc object takes the password, role, and appointments properties from user._doc and assigns them to separate variables. The rest of the properties are collected into an object called rest using the spread operator (...). So, rest contains all the other properties that are not explicitly assigned to password, role, or appointments.


        res.status(200).json({
            status: true,
            message:"Successfully Logged In...",
            token,
            data:{...rest},
            role
        })

    } catch (error) {
        res.status(500).json({
            status:false,
            message: "Failed to Login: "+ error.message
        })
    }
}
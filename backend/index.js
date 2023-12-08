import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv' 
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import doctorRouter from './Routes/doctor.js'
import reviewRoute from "./Routes/review.js"

//if you miss .js extention then there will be an console error while testing postman

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}

app.get('/', (req,res)=> {
    res.send('working')
})

//database connection
mongoose.set('strictQuery', false)
const connectDB = async()=>{
    
    await mongoose.connect(process.env.MONGO_URL)
    .then(c => {
        console.log(`MongoDB connected to: ${c.connection.host}`);
    }).catch(e=>{
        console.error('Error connecting MongoDB:', e );
    })
}

//Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/doctors',doctorRouter)
app.use('/api/v1/reviews',reviewRoute)


app.listen(port , ()=>{
    connectDB()
    console.log('server running: ' + port);
})
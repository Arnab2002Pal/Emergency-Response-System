import mongoose from "mongoose";
import Doctor from "./DoctorSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function(next){
  //.populate() method, which is used in Mongoose to perform document population.
  
  //the .populate() method is used to retrieve and replace references (usually ObjectIds) in a document with the actual data from another collection. This is commonly used when you have relationships between documents in different collections in your MongoDB database. The goal of using .populate() is to simplify working with related data and make it easier to work with fully populated documents.

  //Document population is a way to replace specified paths in a document with actual document(s) from other collections. It's useful when you have references (like foreign keys) to other documents in your MongoDB collections, and you want to fetch the related data as part of the query.
  this.populate({
    path:'user',
    select:'name photo',
  })
  //user is getting null over here
  next()
})
//Mongoose middleware function using the .pre() method to intercept and perform some operations before any query that starts with "find" is executed.

//.pre() method is used to specify a middleware that should run before a specific Mongoose query hook. In this case, it's running before any query that starts with "find."

///^find/: This is a regular expression pattern enclosed in slashes (/). The ^ character in a regular expression represents the start of a string. So, /^find/ is a regular expression that matches any string that starts with "find."

//The purpose of this middleware is to execute some custom logic before any find-related queries are executed on the reviewSchema. This can be useful for tasks like logging, modifying query parameters, or performing any other necessary operations before the actual database query is sent to MongoDB.

//function(next) { } block, you would typically place the logic you want to execute before the find query. The next function is a callback that you call when your custom logic is done, allowing the middleware to continue to the next step in the Mongoose query execution process.

reviewSchema.statics.calcAverageRatings = async function(doctorId){

  // this points the current review
  const stats = await this.aggregate([{
    $match:{doctor:doctorId}
  },
  {
    $group:{
      _id:'$doctor',
      numOfRating: {$sum:1},
      avgRating:{$avg:'$rating'}
    }
  }
])

await Doctor.findByIdAndUpdate(doctorId,{
  totalRating: stats[0].numOfRating,
  averageRating: stats[0].avgRating
})

}

reviewSchema.post('save',function(){
  this.constructor.calcAverageRatings(this.doctor)
})

export default mongoose.model("Review", reviewSchema);
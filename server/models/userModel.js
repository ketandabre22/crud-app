import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      fname: {
            type: String,
            required: true
      }
      , lname: {
            type: String,
            required: true
      },
      email: {
            type: String,
            unique: true,  //email should be unique for every user
            required: [true, 'Please provide your email']
      },
      password: {
            type: String,
            required: [true, 'Please provide a password'],
            minlength: 8
      },
})

export default mongoose.model("User", userSchema);
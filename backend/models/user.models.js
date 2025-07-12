import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        lowwercase: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: [8, "password should contain minimum 8 letters"],
    },
},{timestamps:true});

export const User = mongoose.model("User", userSchema); 
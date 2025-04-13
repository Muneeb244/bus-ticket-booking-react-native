import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    phone: {type: String},
    password: {type: String}
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;
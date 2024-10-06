import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
    },
    password: String,
    mobileNum: Number,

});

export const User = mongoose.model.users || mongoose.model("users", UserSchema)
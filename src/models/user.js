import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  mobileNum: Number,
});

// Check if the model is already defined to avoid OverwriteModelError
export const User = mongoose.models.User || mongoose.model("User", UserSchema);

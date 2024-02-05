import { Schema, model } from 'mongoose';
import Joi from "joi";

import  handleMongooseError  from '../helpers/index.js';

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: String

}, { versionKey: false, timestamps: true });

userSchema.post("save", handleMongooseError);

export const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  // subscription:
})

export const loginSchema = Joi.object({ 
  email: Joi.string().required(),
  password: Joi.string().required(),
  
})


const User = model("user", userSchema);

export default User;
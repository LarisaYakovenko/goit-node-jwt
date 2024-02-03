import { Schema, model } from 'mongoose';
import Joi from "joi";

import { handleMongooseError } from '../helpers/handleMongooseError.js';

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
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  
})

export const loginSchema = Joi.object({ 
  email: Joi.string().required(),
  password: Joi.string().required(),
  
})


const User = model("user", userSchema);

export default User;
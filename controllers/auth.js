import bcrypt from "bcrypt";
import  jwt from "jsonwebtoken"

import User from "../models/user.js"
import HttpError from '../helpers/HttpError.js';

const { SECRET_KEY } = process.env;

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            throw HttpError(409, "Email already in use");
        }
    
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({...req.body, password: hashPassword});
        res.status(201).json({
            
            email: newUser.email,
            name: newUser.name,
    })
    }
    catch (error) {
        next(error);
    }
}


export const login = async (req, res) => {
    try {
         const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            throw HttpError(401, "Email or password invalid");
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            throw HttpError(401, "Email or password invalid");
        }

        const payload = {
            id: user._id,
        }

        const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
        res.json({
            token,
        })
        
    }
    catch (error) {
         next(error);
    }
}


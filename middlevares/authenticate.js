import jwt from "jsonwebtoken";

import User from "../models/user.js"

import HttpError from "../helpers/HttpError.js";

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] =  authorization.split(" ")
    if (bearer !== "Bearer") {
        next(HttpError(401));
    }
    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
    }
    catch (error) {
        next(HttpError(401));
    }
    next();
}
export default authenticate;
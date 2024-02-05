import express from "express";
import {register} from "../../controllers/auth.js";
import {login} from "../../controllers/auth.js";
import validateBody from "../../middlevares/validateBody.js";
import { registerSchema, loginSchema}from "../../models/user.js"

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), register);
authRouter.post("/login", validateBody(loginSchema), login);



export default authRouter;

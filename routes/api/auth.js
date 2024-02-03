import express from "express";
import register from "../../controllers/auth.js";
import validateBody from "../../middlevares/validateBody.js";
import { registerSchema, loginSchema}from "../../models/user.js"

const router = express.Router();

router.post("/register", validateBody(registerSchema), register)

export  {router};

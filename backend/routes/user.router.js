import express from "express";
import { User } from "../models/user.models.js";
// import { connection } from "../config/db.js";
import {body, validationResult} from "express-validator"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const router = express.Router();

router.post("/register",
    body('email').trim().isEmail(),
    body('password').trim().isLength({min: 8}),
    async (req, res)=>{

        const errors = validationResult(req);
        console.log(errors);
        const {username, email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const user= await User.create({
            username:username,
            email:email,
            password:hashPassword
        })
        res.json(user)
        console.log(user);
})

router.post(
    "/login",
    body("email").trim().isEmail(),
    body("password").trim().isLength({ min: 8 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: errors.array(),
                message: "Invalid Data",
            });
        }

        const { email, password } = req.body;
        console.log("Email: ", email);
        console.log("Password: ", password);
        
        
        try {
            const userData = await User.findOne({ email: email });
            console.log("User found?", userData);

            if (!userData) {
                return res.status(400).json({
                    message: "Email or password is incorrect",
                });
            }

            const isMatch = await bcrypt.compare(password, userData.password);

            if (!isMatch) {
                return res.status(400).json({
                    message: "Email or password is incorrect",
                });
            }

            const token = jwt.sign(
                {
                    userId: userData._id,
                    email: userData.email,
                    username: userData.username,
                },
                process.env.JWT_SCRET,
            );

            res.cookie('token', token);
            res.send("Logged in");
        } catch (err) {
            console.error("Login error:", err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
);

export default router;

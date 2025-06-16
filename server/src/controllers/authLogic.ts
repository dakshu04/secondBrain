import { Request, Response } from "express"
import { UserModel } from "../models/db"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET as string
//sign up
const signup = async (req: Request, res: Response) => {
    // TODO: zod validation here, hash the password, add status codes
    try {
        const username = req.body.username
        const password = req.body.password

        await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "User signed up"
        })
        console.log(username)
        console.log(password);
        
    } catch (error) {
        res.status(411).json({
            message: "User already exists", error
        })    
    }
}

// Route 2: User Signin
const signin = async (req: Request, res: Response): Promise<void> => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({ username, password });

    if (existingUser) {
        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET);
        console.log("Generated token:", token);
        res.status(200).json({ token });
    } else {
        res.status(403).json({
            message: "Incorrect Credentials",
        });
    }
};


export { signup, signin }
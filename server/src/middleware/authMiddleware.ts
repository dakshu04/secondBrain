import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET as string

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const header = req.headers["authorization"]
        if(!header) {
            res.status(401).json({
                message: "Authorisation header missing"
            })
            return
        }
        const token = header
        if(!token) {
            res.status(401).json({
                message: "token is not provided"
            })
        }

        const decoded = jwt.verify(token , JWT_SECRET)
        // @ts-ignore
        req.userId = decoded.id
        next()
    } catch (error) {
        res.json({
            message: "Authentication failed"
        })
    }
}
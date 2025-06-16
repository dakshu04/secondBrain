"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const userMiddleware = (req, res, next) => {
    try {
        const header = req.headers["authorization"];
        if (!header) {
            res.status(401).json({
                message: "Authorisation header missing"
            });
            return;
        }
        const token = header;
        if (!token) {
            res.status(401).json({
                message: "token is not provided"
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        // @ts-ignore
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        res.json({
            message: "Authentication failed"
        });
    }
};
exports.userMiddleware = userMiddleware;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authLogic_1 = require("../controllers/authLogic");
const router = express_1.default.Router();
router.post("/signin", authLogic_1.signin);
router.post("/signup", authLogic_1.signup);
exports.default = (router);

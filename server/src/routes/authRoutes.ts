import express from "express"

import { signup, signin } from "../controllers/authLogic"

const router = express.Router()

router.post("/signin", signin)
router.post("/signup", signup)

export default(router)
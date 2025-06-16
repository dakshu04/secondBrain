import express from "express";
// TODO: Uncomment and use userMiddleware once authentication is ready
import { userMiddleware } from "../middleware/authMiddleware";
import {
  addContent,
  getUserContent,
  shareContentLink,
  deleteUserContent,
  getSharedContent,
} from "../controllers/userLogic"

const router = express.Router();

// Route 3: Add Content

router.post("/content",userMiddleware, addContent);

// Route 4: Get User Content

router.get("/content",userMiddleware, getUserContent);

// Route 5: Delete User Content

// router.delete("/content", userMiddleware,deleteUserContent);

// // Route 6: Share Content Link

router.post("/secondBrain/share", userMiddleware , shareContentLink);

// // Route 7: Get Shared Content (Public)
router.get("/secondBrain/:shareLink", getSharedContent);

export default router;
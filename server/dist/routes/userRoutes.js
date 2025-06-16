"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// TODO: Uncomment and use userMiddleware once authentication is ready
const authMiddleware_1 = require("../middleware/authMiddleware");
const userLogic_1 = require("../controllers/userLogic");
const router = express_1.default.Router();
// Route 3: Add Content
router.post("/content", authMiddleware_1.userMiddleware, userLogic_1.addContent);
// Route 4: Get User Content
router.get("/content", authMiddleware_1.userMiddleware, userLogic_1.getUserContent);
// Route 5: Delete User Content
// router.delete("/content", userMiddleware,deleteUserContent);
// // Route 6: Share Content Link
router.post("/secondBrain/share", authMiddleware_1.userMiddleware, userLogic_1.shareContentLink);
// // Route 7: Get Shared Content (Public)
router.get("/secondBrain/:shareLink", userLogic_1.getSharedContent);
exports.default = router;

import express from "express";
import {
    register,
    login,
    me,
    updateProfile,
    updateReminderSettings
} from "../controllers/auth.controller.js";

import {protect} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, me);
router.put("/profile", protect, updateProfile);
router.put("/reminder-settings", protect, updateReminderSettings);

export default router;
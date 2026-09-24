import express from "express";

import { 
    archiveHabit,
    createHabit,
    deleteHabit,
    getHabits,
    reorderHabits,
    updateHabit,
} from "../controllers/habit.controller.js";

import {protect} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect); // every router need authentications 

router.get("/", getHabits);
router.post("/", createHabit);
router.put("/reorder",  reorderHabits);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);
router.put("/:id/archive", archiveHabit);

export default router;
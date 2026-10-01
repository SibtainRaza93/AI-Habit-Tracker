import cron from "node-cron";
import User from "../models/user.models.js";
import Habit from "../models/habit.models.js";
import HabitLog from "../models/habitLog.models.js";
import { sendReminderEmail } from "../utils/mailer.js";

const getTodayKey = () => {
  const d = new Date();
  return d.toISOString().slice(0, 10); // "YYYY-MM-DD"
};

// Runs every minute, checks whose reminderTime (HH:mm) matches current time
cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();
    const hhmm = now.toTimeString().slice(0, 5); // "HH:mm"

    const users = await User.find({
      reminderEnabled: true,
      reminderTime: hhmm,
    });

    if (!users.length) return;

    const today = getTodayKey();

    for (const user of users) {
      const habits = await Habit.find({
        userId: user._id,
        isArchived: false,
      });
      if (!habits.length) continue;

      const todayLogs = await HabitLog.find({
        userId: user._id,
        completedDate: today,
      });
      const doneIds = new Set(todayLogs.map((l) => l.habitId.toString()));

      const pendingHabits = habits.filter(
        (h) => !doneIds.has(h._id.toString())
      );

      if (pendingHabits.length) {
        await sendReminderEmail(
          user.email,
          user.name,
          pendingHabits.map((h) => h.name)
        );
        console.log(`Reminder sent to ${user.email}`);
      }
    }
  } catch (err) {
    console.error("Reminder job error:", err.message);
  }
});
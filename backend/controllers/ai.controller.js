import Habit from "../models/habit.models.js";
import HabitLog from "../models/habitLog.models.js";
import AIInsight from "../models/Allinsight.models.js";
import { lastNDays, calcStreak, todayKey } from "../utils/dateHelper.js";

const buildWeekContext = async (userId) => {
    const habits = await Habit.find({ userId, isArchived: false });
    const days = lastNDays(7);
    const logs = await HabitLog.find({
        userId,
        completedDate: {
            $gte: days[0], $lte: days[days.length - 1]
        },
    });

    const perHabit = habits.map((h) => {
        const completed = logs.filter((l) => {
            String(l.habitId) === String(h._id)
        }).length;
        return {
            name: h.name,
            category: h.category,
            frequency: h.frequency,
            completedDays: completed,
            targetDays: h.targetDays,

        };
    });
    return { days, perHabit };
}

export const weeklyReport = async (req, res) => {
    try {
        const ctx = await buildWeekContext(req.user._id);

        if (!ctx.perHabit.length) {
            return res.json({
                content:
                    "You don't have any active habits yet. Create your first habit to start tracking — I'll generate a weekly report once you have some data.",
            });
        }

        const userMsg = `Here is the user's habit data for the past 7 days (${ctx.days[0]} to ${ctx.days[6]}):

${ctx.perHabit
                .map(
                    (h) =>
                        `- ${h.name} (${h.category}, ${h.frequency}: completed ${h.completedDays} of the past 7 days, target ${h.targetDays}/week)`
                )
                .join("\n")}

Please write the personalised weekly report now.`;

        const { content } = await chatCompletion({
            system: SYSTEM_REPORT.weekly,
            user: userMsg,
        });

        await AIInsight.create({
            userId: req.user._id,
            type: "weekly",
            content,
        });

        res.json({ content });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
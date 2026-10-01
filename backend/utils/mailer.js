import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendReminderEmail = async (to, userName, habitNames) => {
  const list = habitNames.map((n) => `<li>${n}</li>`).join("");

  await transporter.sendMail({
    from: `"Habit Tracker" <${process.env.EMAIL_USER}>`,
    to,
    subject: "⏰ Your Habit Reminder",
    html: `
      <div style="font-family:sans-serif;">
        <h2>Hey ${userName} 👋</h2>
        <p>You haven't completed these habits yet today:</p>
        <ul>${list}</ul>
        <p>Keep the streak alive! 🔥</p>
      </div>
    `,
  });
};
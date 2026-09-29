

🖼 Screenshots
🏠 Dashboard

📋 All Habits

📊 AI Weekly Report

📈 Insights

💬 AI Chatbot

📉 Statistics

📊 Statistics View

🖼 Additional Screenshot

📁 Project Structure
AI-Habit-Tracker/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── ai.controller.js
│   │   ├── auth.controller.js
│   │   ├── habit.controller.js
│   │   └── log.controller.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Allinsight.models.js
│   │   ├── habit.models.js
│   │   ├── habitLog.models.js
│   │   └── user.models.js
│   ├── routes/
│   │   ├── ai.routes.js
│   │   ├── auth.routes.js
│   │   ├── habits.routes.js
│   │   └── log.routes.js
│   ├── scripts/
│   ├── utils/
│   │   ├── aiService.js
│   │   └── dateHelper.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   └── ai-habit-tracker-ui-boilerplate-code/
│       ├── public/
│       ├── src/
│       │   ├── api/
│       │   ├── assets/
│       │   ├── components/
│       │   ├── context/
│       │   ├── pages/
│       │   ├── utils/
│       │   ├── App.jsx
│       │   ├── index.css
│       │   └── main.jsx
│       ├── .env.example
│       ├── package.json
│       └── vite.config.js
│
├── screenshots/
│   ├── allHabit.png
│   ├── chatbot.png
│   ├── dashboard.png
│   ├── image.png
│   ├── insights.png
│   ├── report.png
│   ├── statistics.png
│   └── viewStatic.png
│
├── .gitignore
├── LICENSE
└── README.md
🧩 Feature → Component Map
Feature	Key Components
Daily tracking	TodayHabitCard, ProgressRing, SummaryCards
Heatmap	HeatmapChart
Weekly grid	WeeklyGrid, WeeklyBarChart
Insights	CategoryPieChart, MonthlyBarChart
AI weekly report	AIWeeklyReport, Markdown
AI suggestions	HabitSuggestionModal
AI streak recovery	StreakRecoveryCard
AI chat	AIChat
Morning motivation	MorningMotivation
Navigation	AppLayout, Sidebar, MobileNav
🚀 Getting Started
Prerequisites
Node.js v18 or higher
npm or yarn
MongoDB Atlas or local MongoDB
Google Gemini API key
1. Clone the Repository
git clone https://github.com/SibtainRaza93/AI-Habit-Tracker.git
cd AI-Habit-Tracker
2. Install Backend
cd backend
npm install
3. Install Frontend
cd ../frontend/ai-habit-tracker-ui-boilerplate-code
npm install
4. Configure Environment Variables

Create:

backend/.env

and:

frontend/ai-habit-tracker-ui-boilerplate-code/.env
5. Run Backend
cd backend
npm run dev
6. Run Frontend
cd frontend/ai-habit-tracker-ui-boilerplate-code
npm run dev

Frontend:

http://localhost:5173

Backend:

http://localhost:8000
🔑 Environment Variables
Backend
PORT=8000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash

CLIENT_URL=http://localhost:5173
Frontend
VITE_API_URL=http://localhost:8000/api

🔒 Never commit .env files to GitHub.

📡 API Overview
Authentication
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login and receive a JWT
GET	/api/auth/me	Get current user profile
Habits
Method	Endpoint	Description
GET	/api/habits	List all habits
POST	/api/habits	Create a habit
PUT	/api/habits/:id	Edit a habit
PATCH	/api/habits/:id/archive	Archive or unarchive a habit
DELETE	/api/habits/:id	Delete a habit
POST	/api/habits/:id/toggle	Check or uncheck a habit
Statistics
Method	Endpoint	Description
GET	/api/stats/streaks	Current and longest streaks
GET	/api/stats/heatmap	90-day completion data
GET	/api/stats/weekly	Weekly habit data
GET	/api/stats/insights	Habit and category statistics
AI
Method	Endpoint	Description
GET	/api/ai/weekly-report	Generate a 7-day AI report
POST	/api/ai/suggest-habits	Generate habit suggestions
GET	/api/ai/streak-recovery	Generate a 3-day recovery plan
POST	/api/ai/chat	Ask questions about habit data
GET	/api/ai/morning-motivation	Generate personalised motivation
🤖 AI Features
📝 AI Weekly Report

Analyses the previous 7 days and provides a personalised review covering wins, missed habits, patterns, and areas to focus on.

💡 AI Habit Suggestions

A 3-step wizard collects:

User goals
Most productive time of day
Previously difficult habits

Gemini then generates personalised habit suggestions.

🩹 AI Streak Recovery Coach

Detects broken streaks of 7+ days and generates a personalised 3-day comeback plan.

💬 AI Habit Analysis Chat

Users can ask questions about their habit data.

Examples:

"Which habit am I most consistent with?"
"What day of the week do I usually skip?"
"Which habit has improved the most?"
☀️ AI Morning Motivation

Generates daily motivational messages using the user's actual habits and streak information.

🔒 Security
Passwords are hashed using bcrypt
Authentication uses signed JWT tokens
Protected routes use authentication middleware
JWT secrets are stored in environment variables
Gemini API keys are stored in environment variables
Gemini API requests are handled server-side
.env files are excluded from Git
☁️ Deployment
Part	Suggested Platforms
Frontend	Vercel, Netlify
Backend	Render, Railway, Fly.io
Database	MongoDB Atlas
Deployment Checklist
Configure production environment variables
Update CLIENT_URL
Update VITE_API_URL
Build the frontend
Use a strong production JWT secret
🗺 Roadmap
 Push / email reminders
 Habit sharing & accountability partners
 Data export (CSV / PDF)
 PWA / offline support
 Achievements & badges
🤝 Contributing

Contributions are welcome.

Fork the repository
Create a feature branch:
git checkout -b feature/amazing-feature
Commit your changes:
git commit -m "Add amazing feature"
Push the branch:
git push origin feature/amazing-feature
Open a Pull Request
📄 License

This project is licensed under the MIT License.

See the LICENSE file for details.

👤 Author

Sibtain Raza

GitHub: @SibtainRaza93
LinkedIn: Sibtain Raza
<p align="center"> ⭐ If you found this project useful, please give it a star! ⭐ </p> ```

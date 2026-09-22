import "dotenv/config";
import express from "express"
import cors  from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"
import { notFound, errorHandler } from "./middlewares/errorHandler.js";

import dns from "node:dns";

const app = express();
const PORT = process.env.PORT || 8000;

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const allowedOrigins = (process.env.CLIENT_URL || "")
.split(",")
.map((s) => s.trim())
.filter(Boolean);

const corsOptions = {
    origin(origin, cb){
        if(!origin) return cb(null, true);

        if(/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)){
            return cb(null, true);
        }

        if(allowedOrigins.includes(origin)) return cb(null, true);

        return cb(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
    methods:["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options(/.*/,cors(corsOptions));
app.use(express.json({limit: "1mb"}));

app.get("/api/health", (req, res) =>{
    res.json({status:"ok", time: new Date().toISOString() });
});
// before not found 

app.use("/api/auth", authRoutes);




app.use(notFound);
app.use(errorHandler);


connectDB().then(() =>{
    app.listen(PORT, ()=>{
        console.log(`Server running on https://localhost:${PORT}`);
    });
});
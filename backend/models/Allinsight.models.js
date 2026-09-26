import mongoose from "mongoose";

const allInsightSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    }, 
    type: {
        type: String,
        enum: ["weekly", "suggestion", "recovery", "chat", "morning"],
        required: true,
        
    },
    content: {
        type: String,
        required: true,
    },
    meta: { // additional features
        type: mongoose.Schema.Types.Mixed,
        default: {},
    },
    generateAt: { // create date
        type: Date, default: Date.now
    },
}, {timestamps: true})

export default mongoose.model("AllInsight", allInsightSchema);
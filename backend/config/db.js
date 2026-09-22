import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        const URI = process.env.MONGO_URI;
        if(!URI) throw new Error("MONGO_URI is not defined");
        const connection = await mongoose.connect(URI);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection Error", error.message);
        process.exit(1);
    }
}
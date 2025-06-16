import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const MONGO_URI = process.env.MONGO_URI as string
async function connectToMongo(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
}

export default connectToMongo;
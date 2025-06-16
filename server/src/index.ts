import express from "express"
import dotenv from "dotenv"
import connectToMongo from "./lib/connectDb"
import authRoutes from "./routes/authRoutes"
import userRoutes from "./routes/userRoutes"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()
connectToMongo()

app.use("/api/v1/user", userRoutes)
app.use("/api/v1", authRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

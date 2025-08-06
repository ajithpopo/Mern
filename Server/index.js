import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js"
import cors from "cors"

dotenv.config(); // ✅ Loads .env variables

const MONGO_URL = process.env.MONGO_URL; // ✅ Declare BEFORE use
const PORT = process.env.PORT || 7000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));


app.use("/api",route);
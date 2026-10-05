import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas (WT Experiment 10 Step 1 & 2)
if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB Atlas Connected Successfully"))
    .catch((err) => console.error("MongoDB Connection Error:", err.message));
} else {
  console.log("Warning: MONGO_URI not found in environment variables.");
}

// Default route - Expected output for WT Experiment 10 verification
app.get("/", (req, res) => {
  res.send("MERN Application Running");
});

// API Status route to verify connectivity between Frontend & Backend
app.get("/api/status", (req, res) => {
  res.json({
    status: "ONLINE",
    app: "Game Dungeon MERN Web Service",
    database: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const port = Number(process.env.PORT) || 8000;
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/octofit-tracker";

mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB on port 27017"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", port, mongoUri });
});

app.listen(port, () => {
  console.log(`OctoFit backend listening on http://localhost:${port}`);
});

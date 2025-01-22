import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.send("Hello from server");
});

// Payment routes
app.use("/api/payment", paymentRoutes);

// Default route to handle root path
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Handle favicon.ico requests

export default app;

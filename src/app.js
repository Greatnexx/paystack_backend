import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/payment", paymentRoutes);


export default app;

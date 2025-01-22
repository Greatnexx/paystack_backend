import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config(); 

const app = express();
app.use(cors());

app.use(express.json());

app.get("/test"), (req, res) => {
    res.send("Hello World!");
}

app.use("/api/payment", paymentRoutes);

export default app;

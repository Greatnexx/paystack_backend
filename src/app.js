import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";


const app = express();
app.use(cors());

app.use(express.json());

app.get("/test", async(req, res) => {
    res.send("Hello from server")
})

app.use("/api/payment", paymentRoutes);

export default app;

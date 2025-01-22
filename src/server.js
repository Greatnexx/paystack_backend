import app from "./app.js";
import connectDb from "./config/db.js";

// Connect to MongoDB
connectDb();

// Export the app for Vercel
export default app;

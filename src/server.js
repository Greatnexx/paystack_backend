import app from "./app.js";
import connectDb from "./config/db.js";

// Connect to MongoDB
connectDb();

// Listen only in a local environment
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for Vercel (required for serverless deployment)
export default app;

import app from "./app.js";
import connectDb from "./config/db.js";

// Connect to MongoDB
connectDb();

if (process.env.NODE_ENV !== 'production') {
   const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

}

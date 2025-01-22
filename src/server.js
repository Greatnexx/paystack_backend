import app from "./app.js";
import connectDb from "./config/db.js";
connectDb();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

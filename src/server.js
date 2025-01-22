import app from "./app.js";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
dotenv.config(); 

connectDb();

const port = process.env.PORT || 4000;

app.listen(port,console.log(`server is listening on ${port}`))

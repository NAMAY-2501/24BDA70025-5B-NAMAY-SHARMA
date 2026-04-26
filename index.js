import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import serverless from "serverless-http";

import studentRoutes from "./routes/student.routes.js";
import studentViewRoutes from "./routes/student.view.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// API ROUTES
app.use("/students", studentRoutes);

// VIEW ROUTES (may not fully work on Vercel)
app.use("/view/students", studentViewRoutes);

app.get("/", (req, res) => {
  res.send("Server Running on Vercel 🚀");
});

// EXPORT FOR VERCEL
export default serverless(app);
import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./db_connect.js";
// importing the routes
import userRouter from "./routes/user.js";
import challengeRouter from "./routes/challenges.js";
import workoutRoute from "./routes/personalPlan.js";

// ...... invoking the dotenv .......
dotenv.config();
// ...... importing the function to connect to the database ......
connectDB();

// ...... creating the app exntry point .......
const app = express();

// ...... creating server port .......
const PORT = process.env.PORT || 4000;

// ....... all middlewares .......
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// ......... routes .........
app.use("/api/auth/", userRouter);
// other routes
app.use("/api/challenges/", challengeRouter);
app.use("/api/workout/", workoutRoute);

// ...... creaating the server .......
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

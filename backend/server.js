import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./db_connect.js";
// importing the routes
import userRouter from "./routes/user.js";
import challengeRouter from "./routes/challenges.js";
import coachingSessionRouter from "./routes/coachingSession.js";
import equipmentRouter from "./routes/equipment.js";
import sleepLogRouter from "./routes/sleepLog.js";
import mealLogRouter from "./routes/mealLog.js";
import userRecommendationRouter from "./routes/userRecommendation.js";

// ...... invoking the dotenv .......
dotenv.config();
// ...... importing the function to connect to the database ......
connectDB();

// ...... creating the app exntry point .......
const app = express();

// ...... creating server port .......
const PORT = process.env.PORT || 4001;

// ....... all middlewares .......
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// .............. routes .........
app.use("/api/auth/", userRouter);
// other routes
app.use("/api/challenges/", challengeRouter);
app.use("/api/coaching-sessions/", coachingSessionRouter);
app.use("/api/equipment/", equipmentRouter);
app.use("/api/sleep-logs/", sleepLogRouter);
app.use("/api/meal-logs/", mealLogRouter);
app.use("/api/user-recommendations/", userRecommendationRouter);

// ...... creaating the server .......
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

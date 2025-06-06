import express from "express"
import { getAllWorkouts, getSingleWorkouts, deleteWorkouts, updateWorkouts, createWorkouts } from "../controllers/personalPlan.js";

const workoutRoute = express.Router()

// routers
workoutRoute.get("/", getAllWorkouts);
workoutRoute.get("/:id", getSingleWorkouts);
workoutRoute.post("/", createWorkouts);
workoutRoute.patch("/:id", updateWorkouts);
workoutRoute.delete("/:id", deleteWorkouts);

export default workoutRoute;
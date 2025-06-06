import mongoose from "mongoose";

const workoutPlanSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  status: {
    type: String,
            enum: ["Active", "Completed", "Paused"],
    default: "Active"
  },
  target: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

export default mongoose.model("workoutPlan", workoutPlanSchema);

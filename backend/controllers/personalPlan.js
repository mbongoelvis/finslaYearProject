import mongoose from "mongoose";
import workoutPlan from "../models/personalPlan.js";
import user from "../models/user.js";

// get all workouts
export const getAllWorkouts = async (req, res) => {
  try {
    const allWorkouts = await workoutPlan.find();
    return res.status(200).json(allWorkouts);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
// get a single workout
export const getSingleWorkouts = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "enter a valid id" });
  }
  try {
    const singWorkout = await workoutPlan.findOne({ _id: id });
    //check of the workout exist
    if (!singWorkout) {
      return res.status(400).json({ message: "workout not found" });
    }
    return res.status(200).json(singWorkout);
  } catch (error) { }
  return res.status(400).send(error.message);
};

// create a workout
export const createWorkouts = async (req, res) => {
  const { name, description, startDate, endDate, target, author } = req.body;
  // check if we have a valide author Id
  if (!mongoose.Types.ObjectId.isValid(author)) {
    return res.status(400).json({ message: "enter a valid id" });
  }
  // find if the person creating it is a user
  const findUser = await user.findOne({ _id: author });
  if (!findUser) {
    return res.status(400).send({ message: "you are not part of this system" });
  }
  try {
    // check for all required fields
    if (!name || !description || !startDate || !endDate || !target || !author) {
      return res.status(400).send("all fields are required");
    }
    //   save the workout
    const saveWorkOut = await new workoutPlan({
      name,
      description,
      startDate,
      endDate,
      target,
      author,
    }).save();
    //   if the workout was not created
    if (!saveWorkOut) {
      return res.status(400).send({ message: "workout not created" });
    }
    return res.status(400).send({ message: "workout created" });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

// update a workout
export const updateWorkouts = async (req, res) => {
  const { author } =
    req.body;
  // check if we have a valide author Id
  if (!mongoose.Types.ObjectId.isValid(author)) {
    return res.status(400).json({ message: "enter a valid id" });
  }
  // find if the person creating it is a user
  const findUser = await user.findOne({ _id: author });
  if (!findUser) {
    return res
      .status(400)
      .send({ message: "you are not part of this system" });
  }
  try {
    const updateWorkout = await workoutPlan.findByIdAndUpdate(req.params.id, req.body, { timestamps: true })
    if (!updateWorkout) {
      return res
        .status(400)
        .send({ message: "unable to update workout" });
    }
    return res.status(200).send({ message: "workout updated successfullyF" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }

};
// delete a workout
export const deleteWorkouts = async (req, res) => {
  const { id } = req.params
  try {
    const deleteWorkOut = await workoutPlan.findByIdAndDelete({ _id: id })
    if (!deleteWorkOut) {
      return res
        .status(400)
        .send({ message: "workout not found" });
    }
    return res.status(200).send({ message: "workout Deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }

};

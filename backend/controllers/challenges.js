import mongoose from "mongoose";
import Challenges from "../models/Challenges.js";

// Controller logic for Challenges model
export const getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenges.find()
      .populate({
        path: "participants",
        select: "-password -__v",
      })
      .select("-__v");
    res.status(200).json(challenges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createChallenge = async (req, res) => {
  const { title, description, duration } = req.body;
  try {
    // check if the user didn't send anything
    if (!title || !description || !duration) {
      return res.status(400).json({ message: "all fields are required" });
    }
    // creatng the new challange
    const newChallenge = await new Challenges({
      title,
      description,
      duration,
    }).save();
    // if the creating was not successfull
    if (!newChallenge) {
      return res.status(400).json({ message: "unable to create challange" });
    }
    return res
      .status(201)
      .json({ massage: "challange created successfull", newChallenge });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getChallenge = async (req, res) => {
  try {
    const challenge = await Challenges.findById(req.params.id).populate(
      participants
    );
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.status(200).json({ challenge });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateChallenge = async (req, res) => {
  try {
    const challenge = await Challenges.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    return res.status(200).json({ challenge });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteChallenge = async (req, res) => {
  try {
    const challenge = await Challenges.findByIdAndDelete(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.status(200).json({ message: "Challenge deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// controller to handle join challange
export const joinChallenge = async (req, res) => {
  const { userId } = req.body;
  // check if the user is part of the system
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "enter a valid object Id" });
  }
  try {
    const challenge = await Challenges.findByIdAndUpdate(req.params.id, {
      $addToSet: {
        participants: userId,
      },
    });
    // check if the operation was success
    if (!challenge) {
      return res.status(400).json({ message: "unable to add user" });
    }
    return res.status(200).json({ message: "successfully joined!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// controller to handle join challange
export const leaveChallenge = async (req, res) => {
  const { userId } = req.body;
  // check if the user is part of the system
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "enter a valid object Id" });
  }
  try {
    const challenge = await Challenges.findByIdAndUpdate(req.params.id, {
      $pull: {
        participants: userId,
      },
    });
    // check if the operation was success
    if (!challenge) {
      return res.status(400).json({ message: "unable to leave community" });
    }
    return res.status(200).json({ message: "successfully leaved" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// controller to end the challange
export const endChallenge = async (req, res) => {
  try {
    const challenge = await Challenges.findByIdAndUpdate(req.params.id, {
      $set: {
        onGoing: false,
      },
    });
    // check if the operation was success
    if (!challenge) {
      return res.status(400).json({ message: "unable to stop challange" });
    }
    return res.status(200).json({ message: "successfully ended challange" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

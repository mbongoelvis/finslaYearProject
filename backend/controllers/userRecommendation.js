import UserRecommendation from '../models/UserRecommendation.js';

// Create a new userRecommendation
export const createUserRecommendation = async (req, res) => {
  try {
    const userRecommendation = new UserRecommendation(req.body);
    await userRecommendation.save();
    res.status(201).json(userRecommendation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all userRecommendations
export const getAllUserRecommendations = async (req, res) => {
  try {
    const userRecommendations = await UserRecommendation.find();
    res.json(userRecommendations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific userRecommendation by ID
export const getUserRecommendationById = async (req, res) => {
  try {
    const userRecommendation = await UserRecommendation.findById(req.params.id);
    if (!userRecommendation) {
      return res.status(404).json({ message: 'UserRecommendation not found' });
    }
    res.json(userRecommendation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a userRecommendation
export const updateUserRecommendation = async (req, res) => {
  try {
    const userRecommendation = await UserRecommendation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!userRecommendation) {
      return res.status(404).json({ message: 'UserRecommendation not found' });
    }
    res.json(userRecommendation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a userRecommendation
export const deleteUserRecommendation = async (req, res) => {
  try {
    const userRecommendation = await UserRecommendation.findByIdAndDelete(req.params.id);
    if (!userRecommendation) {
      return res.status(404).json({ message: 'UserRecommendation not found' });
    }
    res.json({ message: 'UserRecommendation deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

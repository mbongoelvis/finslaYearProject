import Challenges from '../models/Challenges.js';

// Controller logic for Challenges model
export const getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenges.find();
    res.status(200).json(challenges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createChallenge = async (req, res) => {
  const challenge = new Challenges(req.body);
  try {
    const newChallenge = await challenge.save();
    res.status(201).json(newChallenge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getChallenge = async (req, res) => {
  try {
    const challenge = await Challenges.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }
    res.status(200).json(challenge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateChallenge = async (req, res) => {
  try {
    const challenge = await Challenges.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }
    res.status(200).json(challenge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteChallenge = async (req, res) => {
  try {
    const challenge = await Challenges.findByIdAndDelete(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }
    res.status(200).json({ message: 'Challenge deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

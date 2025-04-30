import CoachingSession from '../models/CoachingSession.js';

// Create a new coaching session
export const createCoachingSession = async (req, res) => {
  try {
    const coachingSession = new CoachingSession(req.body);
    await coachingSession.save();
    res.status(201).json(coachingSession);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all coaching sessions
export const getAllCoachingSessions = async (req, res) => {
  try {
    const coachingSessions = await CoachingSession.find();
    res.json(coachingSessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific coaching session by ID
export const getCoachingSessionById = async (req, res) => {
  try {
    const coachingSession = await CoachingSession.findById(req.params.id);
    if (!coachingSession) {
      return res.status(404).json({ message: 'Coaching session not found' });
    }
    res.json(coachingSession);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a coaching session
export const updateCoachingSession = async (req, res) => {
  try {
    const coachingSession = await CoachingSession.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!coachingSession) {
      return res.status(404).json({ message: 'Coaching session not found' });
    }
    res.json(coachingSession);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a coaching session
export const deleteCoachingSession = async (req, res) => {
  try {
    const coachingSession = await CoachingSession.findByIdAndDelete(req.params.id);
    if (!coachingSession) {
      return res.status(404).json({ message: 'Coaching session not found' });
    }
    res.json({ message: 'Coaching session deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

import MealLog from '../models/MealLog.js';

// Create a new mealLog
export const createMealLog = async (req, res) => {
  try {
    const mealLog = new MealLog(req.body);
    await mealLog.save();
    res.status(201).json(mealLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all mealLogs
export const getAllMealLogs = async (req, res) => {
  try {
    const mealLogs = await MealLog.find();
    res.json(mealLogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific mealLog by ID
export const getMealLogById = async (req, res) => {
  try {
    const mealLog = await MealLog.findById(req.params.id);
    if (!mealLog) {
      return res.status(404).json({ message: 'MealLog not found' });
    }
    res.json(mealLog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a mealLog
export const updateMealLog = async (req, res) => {
  try {
    const mealLog = await MealLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mealLog) {
      return res.status(404).json({ message: 'MealLog not found' });
    }
    res.json(mealLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a mealLog
export const deleteMealLog = async (req, res) => {
  try {
    const mealLog = await MealLog.findByIdAndDelete(req.params.id);
    if (!mealLog) {
      return res.status(404).json({ message: 'MealLog not found' });
    }
    res.json({ message: 'MealLog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

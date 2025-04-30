import SleepLog from '../models/SleepLog.js';

// Create a new sleepLog
export const createSleepLog = async (req, res) => {
  try {
    const sleepLog = new SleepLog(req.body);
    await sleepLog.save();
    res.status(201).json(sleepLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all sleepLogs
export const getAllSleepLogs = async (req, res) => {
  try {
    const sleepLogs = await SleepLog.find();
    res.json(sleepLogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific sleepLog by ID
export const getSleepLogById = async (req, res) => {
  try {
    const sleepLog = await SleepLog.findById(req.params.id);
    if (!sleepLog) {
      return res.status(404).json({ message: 'SleepLog not found' });
    }
    res.json(sleepLog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a sleepLog
export const updateSleepLog = async (req, res) => {
  try {
    const sleepLog = await SleepLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sleepLog) {
      return res.status(404).json({ message: 'SleepLog not found' });
    }
    res.json(sleepLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a sleepLog
export const deleteSleepLog = async (req, res) => {
  try {
    const sleepLog = await SleepLog.findByIdAndDelete(req.params.id);
    if (!sleepLog) {
      return res.status(404).json({ message: 'SleepLog not found' });
    }
    res.json({ message: 'SleepLog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

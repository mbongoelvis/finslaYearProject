import express from 'express';
import * as sleepLogController from '../controllers/sleepLog.js';
import verifyToken from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create a new sleepLog
router.post('/',verifyToken, sleepLogController.createSleepLog);

// Get all sleepLogs
router.get("/", verifyToken,sleepLogController.getAllSleepLogs);

// Get a specific sleepLog by ID
router.get("/:id", verifyToken,sleepLogController.getSleepLogById);

// Update a sleepLog
router.put("/:id", verifyToken,sleepLogController.updateSleepLog);

// Delete a sleepLog
router.delete("/:id", verifyToken,sleepLogController.deleteSleepLog);

export default router;

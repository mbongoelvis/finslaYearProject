import express from 'express';
import * as mealLogController from '../controllers/mealLog.js';
import verifyToken from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create a new mealLog
router.post('/',verifyToken, mealLogController.createMealLog);

// Get all mealLogs
router.get("/", verifyToken,mealLogController.getAllMealLogs);

// Get a specific mealLog by ID
router.get("/:id", verifyToken,mealLogController.getMealLogById);

// Update a mealLog
router.put("/:id", verifyToken,mealLogController.updateMealLog);

// Delete a mealLog
router.delete("/:id", verifyToken,mealLogController.deleteMealLog);

export default router;
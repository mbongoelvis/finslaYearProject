import express from 'express';
const router = express.Router();
import * as equipmentController from '../controllers/equipment.js';
import verifyToken from '../middlewares/authMiddleware.js';

// Create a new equipment
router.post("/", verifyToken,equipmentController.createEquipment);

// Get all equipment
router.get("/", verifyToken,equipmentController.getAllEquipment);

// Get a specific equipment by ID
router.get("/:id", verifyToken,equipmentController.getEquipmentById);

// Update a equipment
router.put("/:id", verifyToken,equipmentController.updateEquipment);

// Delete a equipment
router.delete("/:id", verifyToken,equipmentController.deleteEquipment);

export default router;

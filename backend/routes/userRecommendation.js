import express from "express";
import * as userRecommendationController from "../controllers/userRecommendation.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create a new userRecommendation
router.post("/",verifyToken, userRecommendationController.createUserRecommendation);
// Get all userRecommendations
router.get("/",verifyToken, userRecommendationController.getAllUserRecommendations);
// Get a specific userRecommendation by ID
router.get("/:id",verifyToken, userRecommendationController.getUserRecommendationById);
// Update a userRecommendation
router.put("/:id",verifyToken, userRecommendationController.updateUserRecommendation);
// Delete a userRecommendation
router.delete("/:id",verifyToken, userRecommendationController.deleteUserRecommendation);

export default router;

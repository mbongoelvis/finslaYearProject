import express from "express";
import {
  getAllChallenges,
  createChallenge,
  getChallenge,
  updateChallenge,
  deleteChallenge,
} from "../controllers/challenges.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

// Challenges routes
router.get("/", verifyToken,getAllChallenges);
router.post("/", verifyToken,createChallenge);
router.get("/:id", verifyToken,getChallenge);
router.patch("/:id", verifyToken,updateChallenge);
router.delete("/:id", verifyToken,deleteChallenge);

export default router;

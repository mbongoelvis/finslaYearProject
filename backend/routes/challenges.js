import express from "express";
import {
  getAllChallenges,
  createChallenge,
  getChallenge,
  updateChallenge,
  deleteChallenge,
  joinChallenge,
  leaveChallenge,
  endChallenge
} from "../controllers/challenges.js";
// import verifyToken from "../middlewares/authMiddleware.js";
const router = express.Router();

// Challenges routes
router.get("/", getAllChallenges);
router.post("/", createChallenge);
router.get("/:id", getChallenge);
router.patch("/:id", updateChallenge);
router.patch("/join/:id", joinChallenge);
router.patch("/leave/:id", leaveChallenge);
router.patch("/end/:id", endChallenge);
router.delete("/:id", deleteChallenge);

export default router;

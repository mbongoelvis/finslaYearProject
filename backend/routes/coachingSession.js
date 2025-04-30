import express from 'express';
const router = express.Router();
import * as coachingSessionController from '../controllers/coachingSession.js';
import verifyToken from '../middlewares/authMiddleware.js';

// Create a new coaching session
router.post("/", verifyToken,coachingSessionController.createCoachingSession);

// Get all coaching sessions
router.get("/", verifyToken,coachingSessionController.getAllCoachingSessions);

// Get a specific coaching session by ID
router.get("/:id", verifyToken,coachingSessionController.getCoachingSessionById);

// Update a coaching session
router.put("/:id", verifyToken,coachingSessionController.updateCoachingSession);

// Delete a coaching session
router.delete(
  "/:id",
  verifyToken, coachingSessionController.deleteCoachingSession
);

export default router;

import express from "express";
import {
  login,
  signup,
  deleteAccount,
  getAccount,
  getAll,
  updateAccount,
} from "../controllers/user.js";
import verifyToken from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

// the routes
userRouter.post("/", login);
userRouter.post("/signup", signup);
userRouter.get("/all",verifyToken, getAll);
userRouter.get("/:id", verifyToken,getAccount);
userRouter.patch("/:id", verifyToken,updateAccount);
userRouter.delete("/:id", verifyToken,deleteAccount);

// exporting the router
export default userRouter;

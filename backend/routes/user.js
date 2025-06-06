import express from "express";
import {
  login,
  signup,
  deleteAccount,
  getAccount,
  getAll,
  updateAccount,
  checkUserName,
  updateAccountForInterest
} from "../controllers/user.js";
import verifyToken from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

// the routes
userRouter.post("/", login);
userRouter.post("/username", checkUserName);
userRouter.post("/signup", signup);
userRouter.get("/all", getAll);
userRouter.get("/:id", getAccount);
userRouter.patch("/:id", updateAccountForInterest);
userRouter.put("/:id", updateAccount);
userRouter.delete("/:id", deleteAccount);

// exporting the router
export default userRouter;

import bcrypt from "bcrypt";
import userSchema from "../models/user.js";
import mongoose from "mongoose";

// login //
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }
    // find usename and if email if they already exist
    const findEmail = await userSchema.findOne({ email: email });
    if (!findEmail) {
      return res.status(404).json({ message: "account not found" });
    }
    // hash password
    const comparedPassword = await bcrypt.compare(password, findEmail.password);
    if (!comparedPassword) {
      return res.status(400).json({ message: "wrong cridentials" });
    }
    return res.status(200).json({ message: "welcome back", id: findEmail._id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// signup //
export const signup = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    if (!email || !password || !username) {
      return res.status(400).json({ message: "all fields are required" });
    }
    // find usename and if email if they already exist
    const findEmail = await userSchema.findOne({ email: email });
    const findUserName = await userSchema.findOne({ username: username });
    if (findEmail || findUserName) {
      return res.status(400).json({ message: "cridential already in use" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // saving the user
    const saveUser = await new userSchema({
      email,
      username,
      password: hashedPassword,
    }).save();

    // check if user was saved
    if (!saveUser) {
      return res.status(400).json({ message: "Account not Created" });
    }
    return res.status(200).json({ message: "Account created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// update account //
export const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }
    const findAccount = await userSchema.findByIdAndUpdate(id, req.body);
    if (!findAccount) {
      return res.status(400).json({ message: "account not found" });
    }
    return res.status(200).json({ message: "Account updated" });
  } catch (error) {
    return res.status(200).json({ message: "update account route" });
  }
};
// delete sccount //
export const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }
    const deleteAccount = await userSchema.findByIdAndDelete(id);
    if (!deleteAccount) {
      return res.status(400).json({ message: "account not found" });
    }
    return res.status(200).json({ message: "Account deleted" });
  } catch (error) {
    return res.status(200).json({ message: "update account route" });
  }
};
// get account //
export const getAccount = async (req, res) => {
  const { id } = req.params;
  try {
    // check if the id is a valid ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(500).json({ message: "invalid Id" });
    }
    // find the account based on the id
    const findAccount = await userSchema.findById(id, { password: 0 });
    // check if the account exist
    if (!findAccount) {
      return res.status(200).json({ message: "account not found" });
    }
    return res.status(200).json({ account: findAccount });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
// get all account //
export const getAll = async (req, res) => {
  try {
    const findAccounts = await userSchema.find();
    return res.status(200).json({ accounts: findAccounts.length });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

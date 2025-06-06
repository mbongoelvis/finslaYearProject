import mongoose from "mongoose"

// creating the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  age: {
    type: String,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  interest: [{
    type: String
  }]
});

export default mongoose.model("user", userSchema)
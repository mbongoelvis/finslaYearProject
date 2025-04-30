import mongoose from "mongoose"

// creating the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    username: {
        type: String,
        unique: true
    },
    age: {
        type: String
    },
    height: {
        type: String
    },
    weight: {
        type: String
    }
})

export default mongoose.model("user", userSchema)
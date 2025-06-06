import mongoose from 'mongoose';

const LocationChallengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  participants: {
    type:[ mongoose.Schema.Types.ObjectId],
    ref: "user"
  },
  onGoing: {
    type: Boolean,
    default: true
  }
});

const Challenges = mongoose.model('Challenges', LocationChallengeSchema);

export default Challenges;

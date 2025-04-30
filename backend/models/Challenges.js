import mongoose from 'mongoose';

const LocationChallengeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  radius: {
    type: Number,
    required: true
  },
  rewardPoints: {
    type: Number,
    required: true
  }
});

const Challenges = mongoose.model('Challenges', LocationChallengeSchema);

export default Challenges;

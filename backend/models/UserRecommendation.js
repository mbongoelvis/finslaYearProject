import mongoose from 'mongoose';

const UserRecommendationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recommendationType: {
    type: String,
    enum: ['Workout', 'Meal', 'Recovery'],
    required: true
  },
  suggestedItem: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  confidenceScore: {
    type: Number,
    min: 0,
    max: 1
  },
  generatedAt: {
    type: Date,
    default: Date.now
  },
  isAccepted: {
    type: Boolean,
    default: false
  }
});

const UserRecommendation = mongoose.model('UserRecommendation', UserRecommendationSchema);

export default UserRecommendation;

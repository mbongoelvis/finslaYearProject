import mongoose from 'mongoose';

const CoachingSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  coachId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sessionType: {
    type: String,
    enum: ['1-on-1', 'Group'],
    required: true
  },
  scheduledTime: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  recordingUrl: {
    type: String
  },
  notes: {
    type: String
  }
});

const CoachingSession = mongoose.model('CoachingSession', CoachingSessionSchema);

export default CoachingSession;

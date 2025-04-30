import mongoose from 'mongoose';

const SleepLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  sleepTime: {
    type: Date,
    required: true
  },
  wakeTime: {
    type: Date,
    required: true
  },
  quality: {
    type: Number,
    min: 1,
    max: 5
  },
  deepSleepMinutes: {
    type: Number
  }
});

const SleepLog = mongoose.model('SleepLog', SleepLogSchema);

export default SleepLog;

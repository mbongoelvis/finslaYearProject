import mongoose from 'mongoose';

const EquipmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String
  },
  purchaseDate: {
    type: Date
  },
  lastUsed: {
    type: Date
  }
});

const Equipment = mongoose.model('Equipment', EquipmentSchema);

export default Equipment;

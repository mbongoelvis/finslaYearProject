import mongoose from 'mongoose';

const MealLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  mealType: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Snack'],
    required: true
  },
  foods: [{
    name: {
      type: String,
      required: true
    },
    calories: {
      type: Number,
      required: true
    },
    protein: {
      type: Number,
      required: true
    },
    carbs: {
      type: Number,
      required: true
    },
    fats: {
      type: Number,
      required: true
    }
  }],
  totalCalories: {
    type: Number
  }
});

// Middleware to calculate totalCalories before saving
MealLogSchema.pre('save', function(next) {
  this.totalCalories = this.foods.reduce((total, food) => total + food.calories, 0);
  next();
});

const MealLog = mongoose.model('MealLog', MealLogSchema);

export default MealLog;

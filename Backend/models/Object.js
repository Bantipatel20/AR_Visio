const mongoose = require('mongoose');

const objectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Object name is required'],
    trim: true,
  },
  modelUrl: {
    type: String,
    required: [true, 'Model URL is required'],
  },
  thumbnail: {
    type: String,
    default: null,
  },
  defaultScale: {
    type: Number,
    default: 1,
    min: [0.1, 'Scale must be at least 0.1'],
    max: [10, 'Scale cannot exceed 10'],
  },
  category: {
    type: String,
    default: 'uncategorized',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Object', objectSchema);

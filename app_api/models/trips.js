const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema(
  {
    tripCode: { type: String, required: true, unique: true, trim: true, uppercase: true },

    name: { type: String, required: true, trim: true },
    length: { type: String, required: true, trim: true },
    start: { type: String, required: true, trim: true },
    resort: { type: String, required: true, trim: true },
    perPerson: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Trip', tripSchema, 'trips');
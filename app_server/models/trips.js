const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    length: { type: String, required: true, trim: true },     // e.g., "5 nights"
    start: { type: String, required: true, trim: true },      // e.g., "From $799"
    resort: { type: String, required: true, trim: true },     // e.g., "Travlr Resort"
    perPerson: { type: String, required: true, trim: true },  // e.g., "$799"
    image: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Trip', tripSchema, 'trips');
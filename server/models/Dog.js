/**
 * Author: Elliot Gong
 * Purpose: Create a new dog model similar to the cats one.
 * Date: 10/30/2023
 */

const mongoose = require('mongoose');

let dogModel = {};
//Declare a new model for a Dog object.
const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});
//Create and export the dog model.
dogModel = mongoose.model('Dog', dogSchema);

module.exports = dogModel;

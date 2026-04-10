const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// hash password
userSchema.methods.setPassword = function(password) {
  this.password = bcrypt.hashSync(password, 10);
};

// check password
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

mongoose.model('User', userSchema);
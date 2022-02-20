import mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    photoUrl: {
      type: String,
    },
    provider: {
      type: String,
      required: true
    },
    contactType: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);
contactType: String
phone: String

import mongoose from "mongoose";

export default mongoose.model("User", {
  login: {
    type: String,
    require: true,
    unique: true
  },

  email: {
    type: String,
    unique: true,
    require: true
  },

  password: {
    type: String,
    require: true
  },
  sudo: {
    type: Boolean,
    require: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

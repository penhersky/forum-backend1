import mongoose from "mongoose";

export default mongoose.model("Topic", {
  title: {
    type: String,
    require: true,
    unique: true
  },
  body: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

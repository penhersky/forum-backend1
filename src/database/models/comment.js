import mongoose from "mongoose";

export default mongoose.model("Comment", {
  message: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  topicOwner: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

import mongoose from "mongoose";

export default mongoose.model("UserImage", {
  image: {
    type: String,
    require: true
  },
  owner: {
    type: String,
    require: true
  }
});

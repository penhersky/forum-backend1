import mongoose from "mongoose";

export default mongoose.model("fullUser", {
  owner: {
    type: String,
    require: true,
    unique: true
  },
  birthday: {
    type: String,
    require: true
  },
  residence: {
    type: String,
    require: true
  },
  links: {
    type: String,
    require: true
  },
  skills: {
    type: String,
    require: true
  },
  company: {
    type: String,
    require: true
  },
  position: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  }
});

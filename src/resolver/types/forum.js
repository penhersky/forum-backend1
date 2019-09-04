import models from "../../database/models/models";

export const topic = {
  author: async parent => {
    return await models.userModel.findOne({_id: parent.author});
  },
  comments: async parent => {
    return await models.commentModel.find({topicOwner: parent.id});
  }
};

export const comment = {
  author: async parent => {
    return await models.userModel.findOne({_id: parent.author});
  },
  topicOwner: async parent => {
    return await models.userModel.findById(parent.topicOwner);
  }
};

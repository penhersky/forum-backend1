import models from "../database/models/models";
import {readFileSync} from "fs";

export const User = {
  image: async parent => {
    const userImage = await models.userImageModel.findOne({owner: parent.id});
    return await readFileSync(userImage.image);
  }
};

export const userImage = {
  owner: async parent => {
    return await models.userModel.findOne({_id: parent.owner});
  }
};

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

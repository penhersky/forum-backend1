import {readFileSync} from "fs";

import models from "../../database/models/models";

export const User = {
  image: async parent => {
    return await models.userImageModel.findOne({owner: parent.id});
  },
  additionalInfo: async parent => {
    return await models.fullUserModel.findOne({owner: parent.id});
  }
};

export const userImage = {
  owner: async parent => {
    return await models.userModel.findOne({_id: parent.owner});
  }
};

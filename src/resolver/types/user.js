import {readFileSync} from "fs";

import models from "../../database/models/models";

export const User = {
  image: async parent => {
    const userImage = await models.userImageModel.findOne({owner: parent.id});
    return await readFileSync(userImage.image);
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
